import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IItem, ISelectedItem } from 'types';

export const SelectedItemStore = create<ISelectedItem>()(
  devtools((set) => ({
    selectedItem: undefined,
    actions: {
      setSelectedItem: (input: IItem) =>
        set(() => ({ selectedItem: input }), false, 'setSelectedItem'),
      resetSelectedItem: () => set(() => ({ selectedItem: undefined }), false, 'resetSelectedItem'),
    },
  })),
);

const useSelectedItem = () => SelectedItemStore((state) => state.selectedItem);
// 🎉 one selector for all our actions
const useSelectedItemActions = () => SelectedItemStore((state) => state.actions);

export { useSelectedItem, useSelectedItemActions };
