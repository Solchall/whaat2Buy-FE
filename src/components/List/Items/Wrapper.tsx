import { Loading, Pagination } from 'components';
import {
  useCurrentPage,
  useLastItemIndex,
  useFirstItemIndex,
  usePagesArray,
  usePaginationActions,
} from 'store';
import S from './styles';
import { IItem } from 'types';
import { useEffect } from 'react';

interface IListItemsWrapper {
  loadingState: boolean;
  items: IItem[] | undefined;
}

const ListItemsWrapper = ({ loadingState, items }: IListItemsWrapper) => {
  const currentPage = useCurrentPage();
  const pagesArray = usePagesArray();
  const lastItemIndex = useLastItemIndex();
  const firstItemIdex = useFirstItemIndex();
  const { setPagesArray, setLastItemIndex, setFirstItemIndex } = usePaginationActions();

  useEffect(() => {
    setPagesArray(items?.length ? items.length : 0);
  }, [items]);

  useEffect(() => {
    setLastItemIndex();
    setFirstItemIndex();
  }, [currentPage]);

  console.log(
    currentPage,
    pagesArray,
    lastItemIndex,
    firstItemIdex,
    items?.slice(firstItemIdex, lastItemIndex),
  );
  return (
    <div className={S.ListItemsWrapper}>
      {loadingState && <Loading />}
      {items?.slice(firstItemIdex, lastItemIndex).map((item) => (
        <div className="text-white" key={item.no}>
          {item.name}
        </div>
      ))}
      {!loadingState && <Pagination />}
    </div>
  );
};

export default ListItemsWrapper;
