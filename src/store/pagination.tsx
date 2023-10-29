import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IPagination extends PaginationState {
  actions: PaginationActions;
}

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  pagesArray: number[];
  lastItemIndex: number;
  firstItemIndex: number;
}

interface PaginationActions {
  setCurrentPage: (input: number) => void;
  resetCurrentPage: () => void;
  setPagesArray: (input: number) => void;
  setLastItemIndex: () => void;
  setFirstItemIndex: () => void;
}

const PaginationStore = create<IPagination>()(
  devtools((set) => ({
    currentPage: 1,
    itemsPerPage: 9,
    pagesArray: [],
    lastItemIndex: 0,
    firstItemIndex: 0,

    actions: {
      setCurrentPage: (input: number) =>
        set(() => ({ currentPage: input }), false, 'setCurrentPage'),
      setPagesArray: (totalItems: number) =>
        set(
          (state) => ({
            pagesArray: Array.from(
              { length: Math.ceil(totalItems / state.itemsPerPage) },
              (v, i) => i + 1,
            ),
          }),
          false,
          'setPagesArray',
        ),
      resetCurrentPage: () => set(() => ({ currentPage: 1 }), false, 'resetCurrentPage'),
      setLastItemIndex: () =>
        set(
          (state) => ({ lastItemIndex: state.currentPage * state.itemsPerPage }),
          false,
          'setPlaceHolderIdx',
        ),
      setFirstItemIndex: () =>
        set(
          (state) => ({ firstItemIndex: state.lastItemIndex - state.itemsPerPage }),
          false,
          'setPlaceHolderIdx',
        ),
    },
  })),
);

const useCurrentPage = () => PaginationStore((state) => state.currentPage);
const useItemsPerPage = () => PaginationStore((state) => state.itemsPerPage);
const usePagesArray = () => PaginationStore((state) => state.pagesArray);
const useLastItemIndex = () => PaginationStore((state) => state.lastItemIndex);
const useFirstItemIndex = () => PaginationStore((state) => state.firstItemIndex);

// 🎉 one selector for all our actions
const usePaginationActions = () => PaginationStore((state) => state.actions);

export {
  useCurrentPage,
  useItemsPerPage,
  usePagesArray,
  useLastItemIndex,
  useFirstItemIndex,
  usePaginationActions,
};
