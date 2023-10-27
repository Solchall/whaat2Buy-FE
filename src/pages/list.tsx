import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QueryStore } from 'store';
import { getFilteringList, getMagazineList } from 'apis/list.apis';
// import { IItem } from 'types';
import { ListItems, SwitchBtn } from 'components';

const List = () => {
  const query = QueryStore((state) => state.query);
  const navigation = useNavigate();
  const handlebtn = () => {
    navigation('/tt');
  };
  const reqBody = {
    apikey: process.env.REACT_APP_OPEN_AI_KEY || '',
    userNeed: query,
  };

  const FilterQuery = {
    queryKey: ['filtering', query],
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

  if (filterLoading || magazineLoading) return <div className="text-wthie">Loading...</div>;
  if (filterFetching || magazineFetching) return <div className="text-wthie">Fetching...</div>;
  console.log(magazineItems, filterItems);
  /*const magazineList = magazineItems?.map((item: IItem) => (
    <div className="text-white" key={item.no}>
      {item.name}
    </div>
  ));
  const filterList = filterItems?.map((item: IItem) => (
    <div className="text-white" key={item.no}>
      {item.name}
    </div>
  ));*/

  return (
    <>
      <button className="text-white" onClick={handlebtn}>
        페이지 이동
      </button>
      <SwitchBtn />
      <ListItems />
    </>
  );
};

export default List;
