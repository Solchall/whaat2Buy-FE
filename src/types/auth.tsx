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
interface ISignupForm extends SignupFormState {
  actions: SignupActions;
}
interface SignupFormState {
  username: string;
  email: string;
  openAI: string;
  password: string;
  weight: number | undefined;
  height: number | undefined;
  interest: string[];
  currentStep: number;
  startStep: 0;
  endStep: 2;
}
interface SignupActions {
  setCurrentStep: (input: SignupFormState['currentStep']) => void;
  setEmail: (input: SignupFormState['email']) => void;
  setPassword: (input: SignupFormState['password']) => void;
  setUsername: (input: SignupFormState['username']) => void;
  setOpenAI: (input: SignupFormState['openAI']) => void;
  setHeight: (input: SignupFormState['height']) => void;
  setWeight: (input: SignupFormState['weight']) => void;
  resetForm: () => void;
  setForm: (label: string, value: string | number | string[]) => void;
}

/** Login과 signup에 사용되는 버튼 UI  */
interface IAuthButton {
  children: string;
  type: 'submit' | 'button' | 'reset';
  style?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ILoginForm, LoginFormState, ISignupForm, IAuthButton };
