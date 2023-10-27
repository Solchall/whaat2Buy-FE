import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IMagazineList, IFilterList } from 'types';

export const FilterListStore = create<IFilterList>()(
  devtools((set) => ({
    filterList: [],
    actions: {
      setFilterList: (items: IFilterList['filterList']) =>
        set(() => ({ filterList: items }), false, 'setFilterList'),
      resetFilterList: () => set(() => ({ filterList: [] }), false, 'setresetFilterList'),
    },
  })),
);

// 🎉 one selector for all our actions
export const useFilterListActions = () => FilterListStore((state) => state.actions);

export const MagazineListStore = create<IMagazineList>()(
  devtools((set) => ({
    magazineList: [],
    actions: {
      setMagazineList: (items: IMagazineList['magazineList']) =>
        set(() => ({ magazineList: items }), false, 'setMagazineList'),
      resetMagazineList: () => set(() => ({ magazineList: [] }), false, 'setresetMagazineList'),
    },
  })),
);

// 🎉 one selector for all our actions
export const useMagazineActions = () => MagazineListStore((state) => state.actions);
