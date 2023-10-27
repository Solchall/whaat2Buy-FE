interface IListType {
  listType: string;
  actions: {
    setFilterType: () => void;
    setMagazineType: () => void;
  };
}

export type { IListType };
