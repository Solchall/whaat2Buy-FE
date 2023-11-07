import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IItem } from 'types';

interface IItems {
  currentItems: IItem[];
  actions: {
    setCurrentItems: (startIndex: number, endIndex: number, data: IItem[]) => void;
  };
}

const CurrentItemsStore = create<IItems>()(
  devtools((set) => ({
    currentItems: [],
    actions: {
      setCurrentItems: (startIndex, endIndex, data) =>
        set(() => ({ currentItems: data.slice(startIndex, endIndex) }), false, 'setCurrentItems'),
    },
  })),
);

const useCurrentItems = () => CurrentItemsStore((state) => state.currentItems);

// 🎉 one selector for all our actions
const useCurrentItemsActions = () => CurrentItemsStore((state) => state.actions);

export { useCurrentItems, useCurrentItemsActions };
