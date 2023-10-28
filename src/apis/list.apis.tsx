import { defaultAxios } from './index';
import { IReqGetList, IResGetFilterList, IResGetMagazineList, IItem } from 'types';

const PREFIX: string = '/items';
/**
 * 필터링 - 물건 목록 받아오기
 * @apikey apiKey
 * @userNeed userNeed
 */
const getFilteringList = async (body: IReqGetList): Promise<IItem[]> => {
  console.log('getFilterList', body);
  try {
    const {
      data: { filtering },
    }: IResGetFilterList = await defaultAxios.post(`${PREFIX}/filtering`, body);

    return filtering.clothes;
  } catch (error) {
    console.log('Error', error);
    throw new Error('Error');
  }
};

/**
 *매거진 - 물건 목록 받아오기
 * @apikey apiKey
 * @userNeed userNeed
 */
const getMagazineList = async (body: IReqGetList): Promise<IItem[]> => {
  console.log('getMagazineList', body);
  try {
    const {
      data: { magazines },
    }: IResGetMagazineList = await defaultAxios.post(`${PREFIX}/magazines`, body);

    return magazines.clothes;
  } catch (error) {
    console.log('Error', error);
    throw new Error('ERror');
  }
};

export { getFilteringList, getMagazineList };
