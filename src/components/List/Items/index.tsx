import { useListType } from 'store';
import { QueryStore, useUserOpenAI } from 'store';
import S from './styles';
import { useQuery } from 'react-query';
import { getFilteringList, getMagazineList } from 'apis';
import ListItemsWrapper from './Wrapper';

const ListItems = () => {
  const listType = useListType();
  const query = QueryStore((state) => state.query);
  // const navigation = useNavigate();
  const openAI = useUserOpenAI();
  const reqBody = {
    apikey: openAI,
    userNeed: query,
  };
  const FilterQuery = {
    queryKey: ['filter', query],
    queryFn: () => getFilteringList(reqBody),
    // userNeed 값 비어 있는 경우, disabled로 됨
    enabled: !!reqBody.userNeed || !!reqBody.apikey,
  };
  const {
    data: filterItems,
    isLoading: filterLoading,
    isFetching: filterFetching,
  } = useQuery(FilterQuery);

  const MagazineQuery = {
    queryKey: ['magazine', query],
    queryFn: () => getMagazineList(reqBody),
    // userNeed 값 비어 있는 경우, disabled로 됨
    enabled: !!reqBody.userNeed || !!reqBody.apikey,
  };
  const {
    data: magazineItems,
    isLoading: magazineLoading,
    isFetching: magazineFetching,
  } = useQuery(MagazineQuery);
  const Items = listType === 'filter' ? filterItems : magazineItems;
  const LoadingState = filterLoading || filterFetching || magazineFetching || magazineLoading;

  return (
    <div className={S.ListItemsContainer}>
      <ListItemsWrapper loadingState={LoadingState} items={Items} />
    </div>
  );
};

export default ListItems;
