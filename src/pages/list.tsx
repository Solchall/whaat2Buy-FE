import { useQuery } from 'react-query';
import { QueryStore, ListStore } from 'store';
import { getFilteredList } from 'apis/list.apis';

const List = () => {
  const { list, setList } = ListStore();
  const query = QueryStore((state) => state.query);

  const reqBody = {
    apikey: process.env.REACT_APP_OPEN_AI_KEY || '',
    userNeed: query,
  };

  useQuery(
    ['filtering', query],

    () => getFilteredList(reqBody),
    {
      onSuccess: (response) => {
        // console.log(response);
        setList(response);
      },
      onError: (error) => console.log(error),
    },
  );

  const ItemsList = list.map((item) => <div key={item.no}>{item.name}</div>);

  return <>{list && ItemsList}</>;
};

export default List;
