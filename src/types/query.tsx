interface QueryState {
  query: string;
  setQuery: (input: string) => void;
  resetQuery: () => void;
}

interface QueryPlaceHolderState {
  idx: number;
  setPlaceHolderIdx: () => void;
  resetPlaceHolderIdx: () => void;
}

type QueryPlaceHolderStoreValueProps =
  | QueryPlaceHolderState['idx']
  | QueryPlaceHolderState['setPlaceHolderIdx']
  | QueryPlaceHolderState['resetPlaceHolderIdx'];

type QueryStoreValueProps = QueryState['query'] | QueryState['resetQuery'] | QueryState['setQuery'];

export type {
  QueryPlaceHolderState,
  QueryState,
  QueryPlaceHolderStoreValueProps,
  QueryStoreValueProps,
};
