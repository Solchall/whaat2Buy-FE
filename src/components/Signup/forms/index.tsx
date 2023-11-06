import { useCurrentStep } from 'store';
import { Step1, Step2, Step3 } from 'components';

const Form = () => {
  const currentStep = useCurrentStep();

  return (
    <>
      {currentStep === 0 && <Step1 />}
      {currentStep === 1 && <Step2 />}
      {currentStep === 2 && <Step3 />}
    </>
  );
};

export default Form;
