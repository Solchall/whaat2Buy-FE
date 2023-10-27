import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IItem } from 'types';

interface IList {
  list: IItem[] | [];
  setList: (items: any) => void;
  resetList: () => void;
}

export const ListStore = create<IList>()(
  devtools((set) => ({
    list: [],
    setList: (items: IList['list']) => set(() => ({ list: items }), false, 'setList'),
    resetList: () => set(() => ({ list: [] }), false, 'setresetList'),
  })),
);
