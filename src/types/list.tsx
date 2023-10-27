interface IListType {
  listType: 'filter' | 'magazine';
  actions: {
    setFilterType: () => void;
    setMagazineType: () => void;
  };
}

export type { IListType };
