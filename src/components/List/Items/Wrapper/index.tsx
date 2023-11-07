import { Pagination } from 'components';
import {
  useCurrentPage,
  useLastItemIndex,
  useFirstItemIndex,
  usePagesArray,
  usePaginationActions,
  useCurrentItems,
  useCurrentItemsActions,
} from 'store';

import { IItem } from 'types';
import { useEffect } from 'react';

import { LoadingContainer, CardContainer } from 'components';

interface IListItemsWrapper {
  loadingState: boolean;
  items: IItem[] | undefined;
}

const ListItemsWrapper = ({ loadingState, items }: IListItemsWrapper) => {
  const currentPage = useCurrentPage();
  const pagesArray = usePagesArray();
  const lastItemIndex = useLastItemIndex();
  const firstItemIndex = useFirstItemIndex();
  const { setPagesArray, setLastItemIndex, setFirstItemIndex } = usePaginationActions();
  const currentItems = useCurrentItems();
  const { setCurrentItems } = useCurrentItemsActions();

  useEffect(() => {
    setPagesArray(items?.length ? items.length : 0);
  }, [items]);

  useEffect(() => {
    setLastItemIndex();
    setFirstItemIndex();
    if (items) {
      // 아이템이 바뀐 경우
      setCurrentItems(firstItemIndex, lastItemIndex, items);
    }
  }, [currentPage, items]);

  console.log(currentPage, pagesArray, lastItemIndex, firstItemIndex, currentItems);
  return (
    <>
      {loadingState ? <LoadingContainer /> : <CardContainer />}

      {!loadingState && <Pagination />}
    </>
  );
};

export default ListItemsWrapper;
