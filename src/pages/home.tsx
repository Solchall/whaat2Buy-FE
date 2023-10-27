import { AnimatedTitle, QueryInput } from 'components';

const Home = () => {
  return (
    <div className={S.HomeLayout}>
      <div className={S.HomeContainer}>
        <AnimatedTitle />
        <QueryInput />
      </div>
    </div>
  );
};

export default Home;

const HomeLayout = 'h-screen flex flex-col items-center justify-center';

const HomeContainer = 'w-2/5';

const S = {
  HomeContainer,
  HomeLayout,
};
