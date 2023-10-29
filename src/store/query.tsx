import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IQuery } from 'types';

export const QueryStore = create<IQuery>()(
  devtools((set) => ({
    query: '',
    actions: {
      setQuery: (input: string) => set(() => ({ query: input }), false, 'setQuery'),
      resetQuery: () => set(() => ({ query: '' }), false, 'resetQuery'),
    },
  })),
);

const useQuery = () => QueryStore((state) => state.query);
// 🎉 one selector for all our actions
const useQueryActions = () => QueryStore((state) => state.actions);

export { useQuery, useQueryActions };
