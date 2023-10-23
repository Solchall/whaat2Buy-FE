import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { QueryPlaceHolder } from 'constant/texts';

export interface PlaceHolderState {
  idx: number;
  setPlaceHolderIdx: () => void;
  resetPlaceHolderIdx: () => void;
}

export type PlaceHolderValueProps =
  | PlaceHolderState['idx']
  | PlaceHolderState['setPlaceHolderIdx']
  | PlaceHolderState['resetPlaceHolderIdx'];

export const QueryPlaceHolderStore = create<PlaceHolderState>()(
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
