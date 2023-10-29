import { useCurrentPage, usePagesArray, usePaginationActions } from 'store';
import S from './styles';

const Pagination = () => {
  const currentPage = useCurrentPage();
  const pagesArray = usePagesArray();

  const { setCurrentPage } = usePaginationActions();
  const startPage = pagesArray[0];
  const endPage = pagesArray[pagesArray.length - 1];
  return (
    <div className={S.PaginationContainer}>
      <button
        className={S.Button}
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === startPage}
      >
        ◁
      </button>
      {pagesArray.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? `${S.ActiveButton}` : `${S.InActiveButton}`}
          >
            {page}
          </button>
        );
      })}
      <button
        className={S.Button}
        onClick={() => setCurrentPage(endPage)}
        disabled={currentPage === endPage}
      >
        ▷
      </button>
    </div>
  );
};

export default Pagination;
