import { useQuery } from 'react-query';
import { QueryStore } from 'store';
import { getFilteringList, getMagazineList } from 'apis/list.apis';
import { IItem } from 'types';

const List = () => {
  const query = QueryStore((state) => state.query);

  const reqBody = {
    apikey: process.env.REACT_APP_OPEN_AI_KEY || '',
    userNeed: query,
  };

  const {
    data: filterItems,
    isLoading: filterLoading,
    isFetching: filterFetching,
  } = useQuery(
    ['filtering', query],

    () => getFilteringList(reqBody),
    {
      keepPreviousData: true,
      onError: (error) => {
        console.log('error', error);
      },
      onSuccess: (data) => {
        console.log('success', data);
      },
    },
  );

  const {
    data: magazineItems,
    isLoading: magazineLoading,
    isFetching: magazineFetching,
  } = useQuery(
    ['magazine', query],

    () => getMagazineList(reqBody),
    {
      keepPreviousData: true,
      onError: (error) => {
        console.log('error', error);
      },
      onSuccess: (data) => {
        console.log('success', data);
      },
    },
  );

  if (filterLoading || magazineLoading) return <div className="text-wthie">Loading...</div>;
  if (filterFetching || magazineFetching) return <div className="text-wthie">Fetching...</div>;
  const magazineList = magazineItems?.map((item: IItem) => (
    <div className="text-white" key={item.no}>
      {item.name}
    </div>
  ));
  const filterList = filterItems?.map((item: IItem) => (
    <div className="text-white" key={item.no}>
      {item.name}
    </div>
  ));

  return (
    <>
      {filterItems && filterList}
      {magazineItems && magazineList}
    </>
  );
};

export default List;
