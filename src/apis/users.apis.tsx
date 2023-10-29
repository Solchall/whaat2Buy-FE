import { privateAxios } from '.';
import { IInfo, IReqLikes, IResLikes, IReqAddAskedItem, IResAddAskedItem } from 'types';

const PREFIX_URL = '/users';

/**
 * info
 * 유저 정보
 * @route POST /users/info
 * @access private
 */

const info = async (): Promise<IInfo> => {
  try {
    const { data } = await privateAxios.get(`${PREFIX_URL}/info`);
    console.log('me api: ', data);
    return data;
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};
/**
 * likes
 * 좋아요 추가
 * @route POST /users/likes
 * @access private
 */
const likes = async (data: IReqLikes): Promise<IResLikes> => {
  try {
    console.log(data);
    const response: IResLikes = await privateAxios.post(`${PREFIX_URL}/likes`, data);
    console.log('likes api: ', response);
    return response;
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};
/**
 * asked
 * 질의응답 진행한 옷 추가
 * @route POST /users/asked
 * @access private
 */
const addAskedCloth = async (body: IReqAddAskedItem): Promise<IResAddAskedItem['data']> => {
  try {
    console.log(body);
    const { data }: IResAddAskedItem = await privateAxios.post(`${PREFIX_URL}/asked`, body);
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};

export { info, likes, addAskedCloth };
