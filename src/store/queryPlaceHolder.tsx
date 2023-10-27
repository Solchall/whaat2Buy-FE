import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IQueryPlaceHolder } from 'types';
import { QueryPlaceHolder } from 'constant/texts';

export const QueryPlaceHolderStore = create<IQueryPlaceHolder>()(
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
