import { useListTypeActions, useListType } from 'store';

const SwitchBtn = () => {
  const { setFilterType, setMagazineType } = useListTypeActions();
  const listType = useListType();

  const handleBtnClick = () => {
    console.log(listType);

    if (listType === 'filter') {
      setMagazineType();
    } else {
      setFilterType();
    }
  };
  return (
    <button className="text-white" onClick={handleBtnClick}>
      바꾸기
    </button>
  );
};

export default SwitchBtn;
