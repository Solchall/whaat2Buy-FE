import { Variants } from 'framer-motion';

const TitleContainer = 'place-self-center text-center sm:text-center py-10';
const MainTitleWrapper =
  'text-white text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold';

const MainTitle = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600';

const SubTitleWrapper = 'text-white text-2xl sm:text-2xl lg:text-3xl lg:leading-normal font-medium';

const DivMotion: Variants = {
  initial: { opacity: 0, scale: 0.2 },
  animate: { opacity: 1, scale: 1 },
};

export { TitleContainer, MainTitleWrapper, MainTitle, SubTitleWrapper, DivMotion };
