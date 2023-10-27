import { useListType } from 'store';

const Items = () => {
  const listType = useListType();

  return <div className="text-white">{listType}</div>;
};

export default Items;
