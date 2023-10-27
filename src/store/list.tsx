import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IListType } from 'types';

export const ListTypeStore = create<IListType>()(
  devtools((set) => ({
    listType: 'filter',
    actions: {
      setFilterType: () => set(() => ({ listType: 'filter' }), false, 'setFilterType'),
      setMagazineType: () => set(() => ({ listType: 'magazine' }), false, 'setMagazineType'),
    },
  })),
);

// 🎉 one selector for all our actions
export const useFilterListActions = () => ListTypeStore((state) => state.actions);
