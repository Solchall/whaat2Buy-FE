import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { QueryState } from 'types';

export const QueryStore = create<QueryState>()(
  devtools((set) => ({
    query: '',
    setQuery: (input: string) => set(() => ({ query: input }), false, 'setQuery'),
    resetQuery: () => set(() => ({ query: '' }), false, 'resetQuery'),
  })),
);
