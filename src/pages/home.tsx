import { AnimatedTitle, QueryInput } from 'components';

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-2/5">
        {' '}
        <AnimatedTitle />
        <QueryInput />
      </div>
    </div>
  );
};

export default Home;
