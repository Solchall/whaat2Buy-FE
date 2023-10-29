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

const S = {
  ListItemsContainer,
  ContainerAnimation,
  ListItemsWrapper,
};

export default S;
