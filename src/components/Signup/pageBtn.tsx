import { useCurrentStep, useSignupFormActions, useFormValue } from 'store';
import S from './styles';
import { useEndStep, useStartStep } from 'store/signup';

const PageBtn = () => {
  const currentStep = useCurrentStep();
  const startStep = useStartStep();
  const endStep = useEndStep();
  const { setCurrentStep } = useSignupFormActions();
  const formValue = useFormValue();
  return (
    <div className={S.BtnContainer}>
      {
        <div className={S.BtnWrapper}>
          <button
            className={S.BtnFill('white')}
            disabled={currentStep == startStep}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            이전으로{' '}
          </button>
        </div>
      }
      {
        <div className={S.BtnWrapper}>
          <button
            className={S.BtnFill('none')}
            onClick={() =>
              currentStep === endStep ? console.log(formValue) : setCurrentStep(currentStep + 1)
            }
          >
            {currentStep === endStep ? '제출하기' : '다음으로'}
          </button>
        </div>
      }
    </div>
  );
};

export default PageBtn;
