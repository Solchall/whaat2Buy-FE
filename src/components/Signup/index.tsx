import { PageBtn, Stepper, Form } from 'components';

const SignupForm = () => {
  return (
    <div className={S.SignupContainer}>
      <Stepper />
      <Form />
      <PageBtn />
    </div>
  );
};

export default SignupForm;

const SignupContainer =
  'w-2/5 h-4/5 rounded-xl bg-white  shadow-lg shadow-zinc-300/50 flex flex-col items-center justify-between';

const S = {
  SignupContainer,
};
