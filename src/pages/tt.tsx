import { useQuery } from 'react-query';

import { getFilteringList, getMagazineList } from 'apis/list.apis';
const TT = () => {
  const userNeed = '뉴진스 스타일 옷';
  const reqBody = {
    apikey: process.env.REACT_APP_OPEN_AI_KEY || '',
    userNeed: userNeed,
  };
  const { data: filterItems } = useQuery({
    queryKey: ['filtering', userNeed],
    queryFn: () => getFilteringList(reqBody),
  });
  const { data: magazineItems } = useQuery({
    queryKey: ['magazine', userNeed],
    queryFn: () => getMagazineList(reqBody),
  });

  console.log('TT Page', filterItems, magazineItems);
  return <div>TT</div>;
};

export default TT;
