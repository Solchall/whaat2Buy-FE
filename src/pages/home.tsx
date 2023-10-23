import { AnimatedTitle } from 'components';

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-2/5">
        {' '}
        <AnimatedTitle />
      </div>
    </div>
  );
};

export default Home;
