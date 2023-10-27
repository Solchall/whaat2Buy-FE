import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { QueryPlaceHolderState } from 'types';
import { QueryPlaceHolder } from 'constant/texts';

export const QueryPlaceHolderStore = create<QueryPlaceHolderState>()(
  devtools((set) => ({
    idx: 0,
    setPlaceHolderIdx: () =>
      set(
        (state) => ({ idx: (state.idx + 1) % QueryPlaceHolder.length }),
        false,
        'setPlaceHolderIdx',
      ),

    resetPlaceHolderIdx: () => set(() => ({ idx: 0 }), false, 'resetPlaceHolderIdx'),
  })),
);
