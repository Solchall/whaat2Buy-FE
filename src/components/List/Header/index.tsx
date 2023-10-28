import { MainTitle, MyPageBtn } from 'components';
import S from './styles';

const ListHeader = () => {
  return (
    <div className={S.HeaderContainer}>
      <MainTitle textSize={2} />
      <MyPageBtn />
    </div>
  );
};

export default ListHeader;
