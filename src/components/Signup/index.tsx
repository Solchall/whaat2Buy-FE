import { PageBtn, Stepper, Form } from 'components';
import S from './styles';

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
