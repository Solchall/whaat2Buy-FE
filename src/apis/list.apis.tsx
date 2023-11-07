import { IReqGetList, IItem, IResGetFilterList, IResGetMagazineList } from 'types';
import { privateAxios } from 'apis';

const PREFIX_URL: string = '/items';
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
    }: IResGetFilterList = await privateAxios.post(`${PREFIX_URL}/filtering`, body);

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
    }: IResGetMagazineList = await privateAxios.post(`${PREFIX_URL}/magazines`, body);

    return magazines.clothes;
  } catch (error) {
    console.log('Error', error);
    throw new Error('ERror');
  }
};

export { getFilteringList, getMagazineList };
