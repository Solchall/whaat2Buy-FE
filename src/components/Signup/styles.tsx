const SignupContainer =
  'w-2/5 h-4/5 p-4 rounded-xl bg-white  shadow-lg shadow-zinc-300/50 flex flex-col items-center justify-between';
const BtnContainer = 'w-full flex flex-row justify-between';

const BtnWrapper = `cursor-pointer px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-400 to-pink-600  text-white`;
const BtnFill = (color: string) =>
  `text-black block font-semibold bg-${color} rounded-full px-5 py-2 border-none disabled:bg-zinc-200 disabled:text-zinc-600`;

const S = {
  SignupContainer,
  BtnContainer,
  BtnWrapper,
  BtnFill,
};

export default S;
