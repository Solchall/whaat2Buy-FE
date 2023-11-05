import { useCurrentStep, useEndStep } from 'store/signup';
import S from './styles';

const stepInfo = [
  { number: 1, title: '계정 정보', idx: 0 },
  { number: 2, title: '사이즈 정보', idx: 1 },
  {
    number: 3,
    title: '관심사 정보',
    idx: 2,
  },
];

const Stepper = () => {
  const endStep = useEndStep();
  const currentStep = useCurrentStep();

  return (
    <>
      <div className={S.StepContainer}>
        {stepInfo.map(({ number, title, idx }) => (
          <>
            <div className={S.StepInfoContainer}>
              <div className={S.StepNumber(currentStep, idx)}>{number}</div>
              <div className={S.Title(currentStep, idx)}>{title}</div>
            </div>
            <div className={S.ProgressBarWrapper}>
              {endStep + 1 != number && (
                <>
                  <div className={S.ProgreeBarBg} />
                  <div className={S.ProgressBar(currentStep, idx)} />
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Stepper;
