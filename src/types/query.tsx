interface IQuery extends QueryState {
  actions: QueryActions;
}

interface QueryState {
  query: string;
}

interface QueryActions {
  setQuery: (input: string) => void;
  resetQuery: () => void;
}

type IQueryStoreValue = IQuery['query'] | QueryActions['setQuery'] | QueryActions['setQuery'];

interface IQueryPlaceHolder {
  idx: number;
  setPlaceHolderIdx: () => void;
  resetPlaceHolderIdx: () => void;
}

type IQueryPlaceHolderStoreValue =
  | IQueryPlaceHolder['idx']
  | IQueryPlaceHolder['setPlaceHolderIdx']
  | IQueryPlaceHolder['resetPlaceHolderIdx'];

export type { IQuery, IQueryPlaceHolder, IQueryPlaceHolderStoreValue, IQueryStoreValue };
