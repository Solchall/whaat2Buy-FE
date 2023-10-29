//import { defaultAxios } from './index';
import { IReqItem, IResDetail } from 'types';
import { privateAxios } from 'apis';

const PREFIX_URL: string = '/items';

/**
 * likes
 * 좋아요 추가
 * @route POST /users/likes
 * @access private
 */
const details = async (body: IReqItem): Promise<IResDetail> => {
  try {
    const { data }: { data: IResDetail } = await privateAxios.post(`${PREFIX_URL}/details`, body);
    console.log('details api: ', data);
    return { ...data };
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};

export { details };
