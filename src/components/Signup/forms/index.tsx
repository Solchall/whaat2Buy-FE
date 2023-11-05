import { useCurrentStep } from 'store';
import { Step1, Step2, Step3 } from 'components';

const FormControl: { [key: number]: JSX.Element } = {
  0: <Step1 />,
  1: <Step2 />,
  2: <Step3 />,
};

const Form = () => {
  // const { setForm } = useSignupFormActions();
  const currentStep = useCurrentStep();

  return (
    <>
      {currentStep}
      {FormControl[currentStep]}
    </>
  );
};

export default Form;
