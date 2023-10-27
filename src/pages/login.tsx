import { LoginForm } from 'components';

const Login = () => {
  return (
    <div className={S.FormLayout}>
      <LoginForm />
    </div>
  );
};

export default Login;

const FormLayout = 'h-screen  flex flex-col items-center justify-center';

const S = {
  FormLayout,
};
