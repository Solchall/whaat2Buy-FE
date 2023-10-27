interface IQuery {
  query: string;
  setQuery: (input: string) => void;
  resetQuery: () => void;
}

type IQueryStoreValue = IQuery['query'] | IQuery['resetQuery'] | IQuery['setQuery'];

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
