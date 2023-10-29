import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ISelectedItem } from 'types';

export const SelectedItemStore = create<ISelectedItem>()(
  devtools((set) => ({
    selectedItem: '',
    actions: {
      setSelectedItem: (input: string) =>
        set(() => ({ selectedItem: input }), false, 'setSelectedItem'),
      resetSelectedItem: () => set(() => ({ selectedItem: '' }), false, 'resetSelectedItem'),
    },
  })),
);

const useSelectedItem = () => SelectedItemStore((state) => state.selectedItem);
// 🎉 one selector for all our actions
const useSelectedItemActions = () => SelectedItemStore((state) => state.actions);

export { useSelectedItem, useSelectedItemActions };
