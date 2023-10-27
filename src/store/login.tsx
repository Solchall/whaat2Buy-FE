import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ILoginForm } from 'types';

const LoginFormStore = create<ILoginForm>()(
  devtools((set) => ({
    email: '',
    password: '',

    actions: {
      setEmail: (input) => set(() => ({ email: input }), false, 'setEmail'),
      setPassword: (input) => set(() => ({ password: input }), false, 'setPassword'),
      setForm: ({ email, password }) =>
        set(() => ({ password: password, email: email }), false, 'setForm'),
      resetForm: () => set(() => ({ password: '', email: '' }), false, 'resetForm'),
    },
  })),
);

const useLoginEmail = () => LoginFormStore((state) => state.email);
const useLoginPassword = () => LoginFormStore((state) => state.password);
// 🎉 one selector for all our actions
const useLoginFormActions = () => LoginFormStore((state) => state.actions);

export { useLoginEmail, useLoginPassword, useLoginFormActions };
