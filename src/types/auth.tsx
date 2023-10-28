/** Login 관련 */
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

/** Signup 관련 */
interface SignUpFormState {
  username: string;
  email: string;
  openAI: string;
  password: string;
}

/** Login과 signup에 사용되는 버튼 UI  */
interface IAuthButton {
  children: string;
  type: 'submit' | 'button' | 'reset';
  style?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ILoginForm, LoginFormState, SignUpFormState, IAuthButton };
