import { IItem } from './items';

interface IReqGetFilteredList {
  apikey: string;
  userNeed: string;
}

interface IResGetFilterList {
  status: number;
  data: {
    filtering: {
      result: boolean;
      clothes: IItem[] | [];
    };
  };
}

export type { IReqGetFilteredList, IResGetFilterList };
