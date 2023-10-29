import { privateAxios } from '.';
import { IInfo } from 'types';

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

export { info };
