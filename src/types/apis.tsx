import { IItem } from './items';

interface IReqGetList {
  apikey: string;
  userNeed: string;
}

interface IResGetFilterList {
  status: number;
  data: {
    status: number;
    filtering: {
      result: boolean;
      clothes: IItem[] | [];
    };
  };
}
interface IResGetMagazineList {
  status: number;

  data: {
    magazines: {
      result: boolean;
      clothes: IItem[] | [];
    };
  };
}

export type { IReqGetList, IResGetFilterList, IResGetMagazineList };
