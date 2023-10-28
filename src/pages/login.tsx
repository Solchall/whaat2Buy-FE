import { LoginForm } from 'components';

const Login = () => {
  return (
    <div className={S.LoginFormLayout}>
      <LoginForm />
    </div>
  );
};

export default Login;

const LoginFormLayout = 'h-screen  flex flex-col items-center justify-center';

const S = {
  LoginFormLayout,
};
