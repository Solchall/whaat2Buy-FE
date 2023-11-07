import { Skeleton } from 'components';

import S from '../styles';
import { useItemsPerPage } from 'store';

const LoadingContainer = () => {
  const totalCount = useItemsPerPage();
  const countArray = Array.from({ length: totalCount }, (v, i) => i + 1);
  return (
    <div className={S.ListItemsWrapper}>
      {countArray.map((item) => (
        <Skeleton key={item} />
      ))}
    </div>
  );
};

export default LoadingContainer;
