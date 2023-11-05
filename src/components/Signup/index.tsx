import { Stepper, Form } from 'components';
import S from './styles';

const SignupForm = () => {
  return (
    <div className={S.SignupContainer}>
      <Stepper />
      <Form />
    </div>
  );
};

export default SignupForm;
