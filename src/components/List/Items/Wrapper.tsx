import { Card, Loading, Pagination } from 'components';
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
import { motion, useAnimationControls } from 'framer-motion';

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
  const divControls = useAnimationControls();

  useEffect(() => {
    setPagesArray(items?.length ? items.length : 0);
  }, [items]);

  useEffect(() => {
    setLastItemIndex();
    setFirstItemIndex();
  }, [currentPage]);

  useEffect(() => {
    divControls.start('show');
  }, [items?.slice(firstItemIdex, lastItemIndex)]);

  console.log(
    currentPage,
    pagesArray,
    lastItemIndex,
    firstItemIdex,
    items?.slice(firstItemIdex, lastItemIndex),
  );
  return (
    <>
      {loadingState && (
        <div className={S.ListItemsWrapper}>
          <Loading />
        </div>
      )}

      <motion.div
        variants={S.ContainerAnimation}
        initial="hidden"
        exit="hidden"
        animate={divControls}
        className={S.ListItemsWrapper}
      >
        {items
          ?.slice(firstItemIdex, lastItemIndex)
          .map((item) => <Card item={item} key={item.no} />)}
      </motion.div>
      <div> {!loadingState && <Pagination />}</div>
    </>
  );
};

export default ListItemsWrapper;
