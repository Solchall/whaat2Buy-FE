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

interface IAuthButton {
  children: string;
  type: 'submit' | 'button' | 'reset';
  style?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ILoginForm, LoginFormState, IAuthButton };
