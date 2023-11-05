import { useCurrentStep, useSignupFormActions, useFormValue } from 'store';
import S from './styles';
import { useEndStep, useStartStep } from 'store/signup';

interface IPageBtn {
  data: any;
  errors: any;
}

const PageBtn = ({ data, errors }: IPageBtn) => {
  const currentStep = useCurrentStep();
  const startStep = useStartStep();
  const endStep = useEndStep();
  const { setCurrentStep, setForm } = useSignupFormActions();

  const formValue = useFormValue();
  const handleNextBtn = () => {
    setCurrentStep(currentStep + 1);
    Object.keys(data).forEach(function (key) {
      const value = data[key];
      setForm(key, value);
    });
  };

  const handleSubmit = () => {
    console.log(formValue);
  };

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
            disabled={!errors}
            className={S.BtnFill('none')}
            onClick={() => (currentStep === endStep ? handleSubmit() : handleNextBtn())}
          >
            {currentStep === endStep ? '제출하기' : '다음으로'}
          </button>
        </div>
      }
    </div>
  );
};

export default PageBtn;
