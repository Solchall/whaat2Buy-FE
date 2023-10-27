import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IQuery } from 'types';

export const QueryStore = create<IQuery>()(
  devtools((set) => ({
    query: '',
    setQuery: (input: string) => set(() => ({ query: input }), false, 'setQuery'),
    resetQuery: () => set(() => ({ query: '' }), false, 'resetQuery'),
  })),
);
