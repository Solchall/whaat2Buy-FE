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

export type { IPagination };
