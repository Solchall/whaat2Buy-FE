import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ISignupForm } from 'types';

const SignupFormStore = create<ISignupForm>()(
  devtools((set) => ({
    email: '',
    password: '',
    username: '',
    openAI: '',
    height: undefined,
    weight: undefined,
    interest: [],
    currentStep: 0,
    startStep: 0,
    endStep: 2,

    actions: {
      setCurrentStep: (input: ISignupForm['currentStep']) =>
        set(() => ({ currentStep: input }), false, 'setCurrentStep'),
      setEmail: (input: ISignupForm['email']) => set(() => ({ email: input }), false, 'setEmail'),
      setPassword: (input: ISignupForm['password']) =>
        set(() => ({ password: input }), false, 'setPassword'),
      setUsername: (input: ISignupForm['username']) =>
        set(() => ({ username: input }), false, 'setUsername'),
      setOpenAI: (input: ISignupForm['openAI']) =>
        set(() => ({ openAI: input }), false, 'setOpenAI'),
      setHeight: (input: ISignupForm['height']) =>
        set(() => ({ height: input }), false, 'setHeight'),
      setWeight: (input: ISignupForm['weight']) =>
        set(() => ({ weight: input }), false, 'setWeight'),
      setForm: (label: string, value) => set(() => ({ [label]: value }), false, 'setForm'),

      resetForm: () =>
        set(
          (state: ISignupForm) => ({
            password: '',
            email: '',
            username: '',
            openAI: '',
            height: undefined,
            weight: undefined,
            interest: [],
            currentStep: state.startStep,
          }),
          false,
          'resetForm',
        ),
    },
  })),
);

const useEndStep = () => SignupFormStore((state) => state.endStep);
const useStartStep = () => SignupFormStore((state) => state.startStep);
const useCurrentStep = () => SignupFormStore((state) => state.currentStep);
const useSignupEmail = () => SignupFormStore((state) => state.email);
const useSignupUsername = () => SignupFormStore((state) => state.username);
const useSignupPassword = () => SignupFormStore((state) => state.password);
const useSignupOpenAI = () => SignupFormStore((state) => state.openAI);
const useSignupHeight = () => SignupFormStore((state) => state.height);
const useSignupWeight = () => SignupFormStore((state) => state.weight);
const useSignupInterest = () => SignupFormStore((state) => state.interest);
const useFormValue = () =>
  SignupFormStore(({ username, email, password, openAI, height, weight, interest }) => ({
    username,
    email,
    password,
    openAI,
    height,
    weight,
    interest,
  }));

// 🎉 one selector for all our actions
const useSignupFormActions = () => SignupFormStore((state) => state.actions);

export {
  useEndStep,
  useStartStep,
  useCurrentStep,
  useSignupEmail,
  useSignupUsername,
  useSignupPassword,
  useSignupOpenAI,
  useSignupHeight,
  useSignupWeight,
  useSignupInterest,
  useSignupFormActions,
  useFormValue,
};
