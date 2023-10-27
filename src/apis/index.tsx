import axios, { AxiosRequestConfig } from 'axios';

const axiosDefaultConfig: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_AI_API}`,
};
const defaultAxios = axios.create(axiosDefaultConfig);

const axiosPrivateConfig: AxiosRequestConfig = {
  //baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  withCredentials: true,
};

const privateAxios = axios.create(axiosPrivateConfig);

privateAxios.interceptors.request.use(
  async (config) => {
    console.log(
      'private axios request header',
      config.headers.Authorization,
      !config.headers.Authorization,
    );
    /*if (!config.headers.Authorization) {
      const accessToken = await accessTokenAPI();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }*/

    return config;
  },
  (error) => {
    console.log('usePrivateAxios Error', error);
    return Promise.reject(error);
  },
);

export { defaultAxios, privateAxios };
