import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IAskInput } from 'types';

const AskInputStore = create<IAskInput>()(
  devtools((set) => ({
    askInput: '',
    actions: {
      setAskInput: (input: string) => set(() => ({ askInput: input }), false, 'setAskInput'),
      resetAskInput: () => set(() => ({ askInput: '' }), false, 'resetAskInput'),
    },
  })),
);

const useAskInput = () => AskInputStore((state) => state.askInput);
// 🎉 one selector for all our actions
const useAskInputActions = () => AskInputStore((state) => state.actions);

export { useAskInput, useAskInputActions };
