const ListItemsContainer = 'w-3/5 py-3 flex flex-col items-center justify-around text-white';
const ListItemsWrapper = 'w-full grid gap-x-8 gap-y-10 grid-cols-3';

const ContainerAnimation = {
  hidden: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const ItemAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CardLayout = 'place-self-center';
const CardContainer =
  'group w-[180px] h-[220px] relative overflow-hidden shadow-lg shadow-zinc-300/50 rounded-2xl';

const CardImgContainer = 'absolute top-0 left-0 h-full w-full group-hover:scale-125';
const CardImg = 'w-full h-full object-cover';
const CardShadow =
  'w-full h-full absolute top-0 left-0 group-hover:bg-purple-600/20 hidden group-hover:block';

const CardInfoContainer = 'h-full w-full relative';
const CardBrand = 'text-stone-500 font-medium';
const CardPice = 'text-purple-800 font-bold';
const CardName = 'text-black font-semibold';
const CardSubInfoContainer = 'flex flex-row items-center justify-between';
const CardHoverControl = 'absolute bg-white w-full bottom-[-100%] p-2 group-hover:bottom-[0]';

const IconContainer = 'hidden group-hover:block absolute top-[50%] left-[50%] mt-[-30%] ml-[-8px]';
const AskButton =
  'cursor-pointer mb-3 p-1 flex flex-row bg-pink-400/50 rounded-3xl border border-white/70 hover:bg-pink-400';
const AskIcon = {
  fontSize: '10px',
  color: '#fff',
};
const HeartButton =
  'cursor-pointer p-1 flex flex-row bg-pink-400/40 rounded-3xl border border-white/70 hover:bg-pink-400';
const HeartIcon = {
  fontSize: '10px',
  color: '#fff',
  fontWeight: 'bold',
};
const S = {
  ListItemsContainer,
  ContainerAnimation,
  ListItemsWrapper,

  CardLayout,
  ItemAnimation,
  CardContainer,
  CardImgContainer,
  CardImg,
  CardShadow,

  CardInfoContainer,
  CardSubInfoContainer,
  CardHoverControl,
  CardBrand,
  CardPice,
  CardName,

  IconContainer,
  AskButton,
  HeartButton,
  AskIcon,
  HeartIcon,
};

export default S;
