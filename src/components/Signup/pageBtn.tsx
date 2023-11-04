import { useCurrentStep, useSignupFormActions, useFormValue } from 'store';

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

const BtnContainer = 'w-full flex flex-row justify-between';

const BtnWrapper = `cursor-pointer px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-400 to-pink-600  text-white`;
const BtnFill = (color: string) =>
  `text-black block font-semibold bg-${color} rounded-full px-5 py-2 border-none disabled:bg-zinc-200 disabled:text-zinc-600`;
const S = {
  BtnContainer,
  BtnWrapper,
  BtnFill,
};
