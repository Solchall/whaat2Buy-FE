import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface QueryState {
  query: string;
  setQuery: (input: string) => void;
  resetQuery: () => void;
}

export type QueryStoreValueProps =
  | QueryState['query']
  | QueryState['resetQuery']
  | QueryState['setQuery'];

export const QueryStore = create<QueryState>()(
  devtools((set) => ({
    query: '',
    setQuery: (input: string) => set(() => ({ query: input }), false, 'setQuery'),
    resetQuery: () => set(() => ({ query: '' }), false, 'resetQuery'),
  })),
);
