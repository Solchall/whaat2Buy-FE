import { useListType } from 'store';

const Items = () => {
  const listType = useListType();

  return (
    <div>
      <span className="text-white"> {listType}</span>

      {listType === 'filter' && <div className="text-white">filter List</div>}
      {listType === 'magazine' && <div className="text-white">magazine List</div>}
    </div>
  );
};

export default Items;
