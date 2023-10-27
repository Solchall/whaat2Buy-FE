interface ILoginForm extends LoginFormState {
  actions: LoginActions;
}

interface LoginFormState {
  email: string;
  password: string;
}
interface LoginActions {
  setEmail: (input: string) => void;
  setPassword: (input: string) => void;
  resetForm: () => void;
  setForm: (props: LoginFormState) => void;
}

export type { ILoginForm, LoginFormState };
