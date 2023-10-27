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

export const useListType = () => ListTypeStore((state) => state.listType);
// 🎉 one selector for all our actions
export const useListTypeActions = () => ListTypeStore((state) => state.actions);
