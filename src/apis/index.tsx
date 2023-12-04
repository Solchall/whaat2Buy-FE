import axios, { AxiosRequestConfig } from 'axios';
import { login, signup, accessToken, refreshToken, logoutAll } from './auth.apis';
import { getFilteringList, getMagazineList } from './list.apis';
import { details, size, review, ask } from './items.apis';
import { info, likes, addAskedCloth } from './users.apis';
import { IResAccessToken } from 'types';
import { useUserActions } from 'store';

// AccessToken 헤더 불필요한 경우
const axiosDefaultConfig: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_SERVER_API}`,
  //baseURL: 'http://localhost:8000/api',
};
const defaultAxios = axios.create(axiosDefaultConfig);

// AccessToken 헤더와 쿠키 전송이 필요한 경우
const axiosPrivateConfig: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_SERVER_API}`,
  //baseURL: 'http://localhost:8000/api',
  withCredentials: true,
};
const privateAxios = axios.create(axiosPrivateConfig);

/**
 1. 요청 인터셉터 - 2개의 콜백 함수 받음
 */

privateAxios.interceptors.request.use(
  async (config) => {
    try {
      // HTTP Authorization 요청 헤더에 accessToken이 없는 경우
      if (!config.headers.Authorization) {
        // 새로운 AccessToken 발급 받아 헤더에 부착
        const { accessToken: newAccessToken }: IResAccessToken = await accessToken();
        if (newAccessToken) {
          const { setAccessToken } = useUserActions();
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          setAccessToken(newAccessToken);

          console.log('private axios request header 설정 완료', config.headers.Authorization);
        }
      }
      return config;
    } catch (error) {
      console.error('[_axios.interceptors.request] config : ' + error);
    }

    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됨
    console.error('[_axios.interceptors.request] config : ' + error);
    return Promise.reject(error);
  },
);

/**
 2. 응답 인터셉터 - 2개의 콜백 함수 받음
 */

privateAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    // RefreshToken 만료되었을 때
    if (status === 401) {
      console.log(status, error.response.data.message);
      if (error.response.data.message === 'verifyAccessToken Unauthorized') {
        const originRequest = config;
        try {
          //  refreshToken api 이용해 refreshToken 새롭게 쿠키 설정과 AccessToken 재발급 헤더 설정
          const { accessToken: newAccessToken } = await refreshToken();
          const { setAccessToken } = useUserActions();
          if (newAccessToken) {
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            setAccessToken(newAccessToken);
            return axios(originRequest);
          }
        } catch (error) {
          // 나머지 에러는 다시 로그인하도록 함
          const { resetUser } = useUserActions();
          window.location.replace('/login');
          resetUser();
        }
      }
    }
    return Promise.reject(error);
  },
);

export {
  defaultAxios,
  privateAxios,
  info,
  getFilteringList,
  getMagazineList,
  login,
  signup,
  accessToken,
  refreshToken,
  logoutAll,
  likes,
  addAskedCloth,
  details,
  size,
  review,
  ask,
};
