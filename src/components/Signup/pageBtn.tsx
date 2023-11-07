import { toast } from 'react-toastify';
import {
  useCurrentStep,
  useSignupFormActions,
  useFormValue,
  useEndStep,
  useStartStep,
} from 'store';
import { signup } from 'apis';
import S from './styles';
import { useNavigate } from 'react-router-dom';

interface IPageBtn {
  createData?: any;
  errors?: any;
}

const PageBtn = ({ createData, errors }: IPageBtn) => {
  const navigation = useNavigate();
  const currentStep = useCurrentStep();
  const startStep = useStartStep();
  const endStep = useEndStep();
  const formValue = useFormValue();
  const { setCurrentStep, setForm } = useSignupFormActions();

  const handleNextBtn = () => {
    setCurrentStep(currentStep + 1);
    const data = createData();
    Object.keys(data).forEach(function (key) {
      const value = data[key];
      setForm(key, value);
    });
  };

  const handleSubmit = async () => {
    console.log(formValue);
    try {
      await signup(formValue);
      navigation('/login');
      toast.success('회원가입이 완료되었습니다', {
        theme: 'dark',
        autoClose: 4000,
      });
    } catch (error) {
      toast.error('회원가입이 실패하였습니다', {
        theme: 'dark',
        autoClose: 4000,
      });
    }
  };

  return (
    <div className={S.BtnContainer}>
      {
        <div className={S.BtnWrapper(currentStep === startStep)}>
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
        <div className={S.BtnWrapper(!errors)}>
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
