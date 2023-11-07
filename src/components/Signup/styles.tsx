const StepperBgColors = {
  active: 'bg-pink-500',
  inActive: 'bg-neutral-500',
};

const StepperTextColors = {
  active: 'text-pink-500',
  inActive: 'text-neutral-500',
};
const Progresswidth = {
  full: 'w-[98px]',
  half: 'w-[49px]',
};

const SignupContainer =
  'w-2/5 h-4/5 p-4 rounded-xl bg-white  shadow-lg shadow-zinc-300/50 flex flex-col items-center justify-between';
const BtnContainer = 'w-full flex flex-row justify-between';

const BtnWrapper = (isInActive: boolean) =>
  `cursor-pointer px-1 inline-block py-1 w-full sm:w-fit rounded-full ${
    isInActive ? 'bg-zinc-200' : 'bg-gradient-to-br from-purple-400 to-pink-600'
  }  text-white`;
const BtnFill = (color: string) =>
  `text-black block font-semibold bg-${color} rounded-full px-5 py-2 border-none disabled:bg-zinc-200 disabled:text-neutral-500`;

const setBgColor = (currentStep: number, idx: number) => {
  const bgColor =
    currentStep < idx ? `${StepperBgColors['inActive']}` : `${StepperBgColors['active']}`;
  //console.log(currentStep, number - 1, currentStep >= number - 1, color);

  return bgColor;
};

const setTextColor = (currentStep: number, idx: number) => {
  const textColor =
    currentStep < idx ? `${StepperTextColors['inActive']}` : `${StepperTextColors['active']}`;
  //console.log(currentStep, idx, currentStep >= idx, textColor);

  return textColor;
};

const setWidth = (currentStep: number, idx: number) => {
  if (currentStep == idx) {
    return `${Progresswidth['half']}`;
  } else if (currentStep < idx) {
    return `${Progresswidth['full']}`;
  } else {
    return `${Progresswidth['full']}`;
  }
};
const StepContainer = 'w-full flex flex-row items-center justify-between';

const StepInfoContainer = 'flex flex-col items-center';

const Title = (currentStep: number, idx: number) => {
  const color = setTextColor(currentStep, idx);
  return `font-semibold ${color}`;
};

const StepNumber = (currentStep: number, idx: number) => {
  const color = setBgColor(currentStep, idx);

  const style = `h-[30px] w-[30px] rounded-full ${color} text-center text-white  p-0.5 mb-3`;
  return style;
};

const ProgressBar = (currentStep: number, idx: number) => {
  const color = setBgColor(currentStep, idx);
  const width = setWidth(currentStep, idx);

  const style = `${width} h-[5px] ${color} rounded-full absolute top-0 left-0 z-10`;
  return style;
};

const ProgressBarWrapper = 'relative';
const ProgreeBarBg = 'w-[98px] h-[5px] bg-neutral-200 rounded-full';

const S = {
  SignupContainer,
  BtnContainer,
  BtnWrapper,
  BtnFill,
  StepContainer,
  StepInfoContainer,
  StepNumber,
  Title,
  ProgressBarWrapper,
  ProgreeBarBg,
  ProgressBar,
};

export default S;
