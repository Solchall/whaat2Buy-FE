import { SignupForm } from 'components';

const Signup = () => {
  return (
    <div className={S.SignupLayout}>
      <SignupForm />
    </div>
  );
};

export default Signup;

const SignupLayout = 'h-screen flex flex-col items-center justify-center';

const S = {
  SignupLayout,
};
