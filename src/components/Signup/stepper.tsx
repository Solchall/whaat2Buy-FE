import { useCurrentStep, useEndStep } from 'store/signup';

const stepInfo = [
  { number: 1, title: '계정 정보' },
  { number: 2, title: '사이즈 정보' },
  {
    number: 3,
    title: '관심사 정보',
  },
];

const setColor = (currentStep: number, number: number) => {
  const activeColor = 'pink-500';
  const inActiveColor = 'neutral-500';
  console.log(currentStep, number - 1, currentStep >= number - 1);

  return currentStep < number - 1 ? inActiveColor : activeColor;
};

const setWidth = (currentStep: number, number: number) => {
  const fullWidth = '98px';
  const halfWidth = '49px';

  if (currentStep == number - 1) {
    return halfWidth;
  } else if (currentStep < number - 1) {
    return fullWidth;
  } else {
    return fullWidth;
  }
};

const Stepper = () => {
  const endStep = useEndStep();
  const currentStep = useCurrentStep();

  return (
    <div className="w-full flex flex-row items-center justify-between">
      {stepInfo.map(({ number, title }, idx) => (
        <>
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`h-[30px] w-[30px] rounded-full bg-${setColor(
                currentStep,
                number,
              )} text-center text-white  p-0.5 mb-3`}
            >
              {number}
            </div>
            <div className={`font-semibold text-${setColor(currentStep, number)}`}>{title}</div>
          </div>
          <div className="relative">
            {endStep + 1 != number && (
              <>
                <div className="w-[98px] h-[5px] bg-neutral-200 rounded-full" />
                <div
                  className={`w-[${setWidth(currentStep, number)}] h-[5px] bg-${setColor(
                    currentStep,
                    number,
                  )} rounded-full absolute top-0 left-0 z-10`}
                />
              </>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default Stepper;
