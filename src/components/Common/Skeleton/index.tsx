import S from './style';

const Skeleton = () => {
  return (
    <div className={S.SkeletonBox}>
      <div className={S.SkeletonShade}>
        <div className={S.SkeletonContent}></div>
      </div>
    </div>
  );
};

export default Skeleton;
