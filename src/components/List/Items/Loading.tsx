import { Skeleton } from 'components';

const Loading = ({ state }: { state: boolean }) => {
  return (
    <>
      {state ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : null}
    </>
  );
};

export default Loading;
