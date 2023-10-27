import { useListTypeActions, useListType } from 'store';

const SwitchBtn = () => {
  const { setFilterType, setMagazineType } = useListTypeActions();
  const listType = useListType();

  const handleBtnClick = () => {
    console.log(listType);

    if (listType === 'filter') {
      setFilterType();
    } else {
      setMagazineType();
    }
  };
  return <button onClick={handleBtnClick}>바꾸기</button>;
};

export default SwitchBtn;
