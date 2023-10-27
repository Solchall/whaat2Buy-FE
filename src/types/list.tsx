import { IItem } from 'types';

interface IFilterList {
  filterList: IItem[] | [];
  actions: IFilterListActions;
}

interface IFilterListActions {
  setFilterList: (items: any) => void;
  resetFilterList: () => void;
}

interface IMagazineList {
  magazineList: IItem[] | [];
  actions: IMagazineListActions;
}

interface IMagazineListActions {
  setMagazineList: (items: any) => void;
  resetMagazineList: () => void;
}

export type { IFilterList, IMagazineList };
