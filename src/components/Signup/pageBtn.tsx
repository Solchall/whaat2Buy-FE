import { useCurrentStep, useSignupFormActions, useFormValue } from 'store';
import S from './styles';

const PageBtn = () => {
  const currentStep = useCurrentStep();
  const { setCurrentStep } = useSignupFormActions();
  const formValue = useFormValue();
  return (
    <div className={S.BtnContainer}>
      {
        <div className={S.BtnWrapper}>
          <button
            className={S.BtnFill('white')}
            disabled={currentStep == 0}
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
            disabled={currentStep < 0 || currentStep > 3}
            onClick={() =>
              currentStep > 2 ? console.log(formValue) : setCurrentStep(currentStep + 1)
            }
          >
            {currentStep > 2 ? '제출하기' : '다음으로'}
          </button>
        </div>
      }
    </div>
  );
};

export default PageBtn;
