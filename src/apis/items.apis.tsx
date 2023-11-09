//import { defaultAxios } from './index';
import { IReqItem, IResDetail, IResReview, IResSize } from 'types';
import { privateAxios } from 'apis';

const PREFIX_URL: string = '/items';

/**
 * details
 * 해당 상품 디테일 요청
 * @route POST /items/details
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

/**
 * size
 * 해당 상품 사이즈 요청
 * @route POST /items/size
 * @access private
 */
const size = async (body: IReqItem): Promise<IResSize> => {
  try {
    const { data }: { data: IResSize } = await privateAxios.post(`${PREFIX_URL}/size`, body);
    console.log('size api: ', data);
    return { ...data };
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};

/**
 * size
 * 해당 상품 리뷰 요청
 * @route POST /items/revies
 * @access private
 */
const review = async (body: IReqItem): Promise<IResReview> => {
  try {
    const { data }: { data: IResReview } = await privateAxios.post(`${PREFIX_URL}/review`, body);
    console.log('size api: ', data);
    return { ...data };
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};

/**
 * ask
 * 해당 상품 리뷰 요청
 * @route POST /items/revies
 * @access private
 */
const ask = async (body: {
  apikey: string;
  userQuestion: string;
  productNo: string;
}): Promise<string> => {
  console.log(body);
  try {
    const { data } = await privateAxios.post(`${PREFIX_URL}/ask`, body);
    console.log('ask api: ', data);
    return data.response;
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};

export { details, size, review, ask };
