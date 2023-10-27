import { defaultAxios } from './index';
import { IReqGetFilteredList, IResGetFilterList } from 'types';

const PREFIX: string = '/items';
/**
 * 필터링 - 물건 목록 받아오기
 * @apikey apiKey
 * @userNeed userNeed
 */
export const getFilteredList = async (body: IReqGetFilteredList) => {
  try {
    const {
      data: { filtering },
      status,
    }: IResGetFilterList = await defaultAxios.post(`${PREFIX}/filtering`, body);
    if (status === 200) {
      return filtering.clothes;
    }
  } catch (error) {
    console.log('Error', error);
    return error;
  }
};
