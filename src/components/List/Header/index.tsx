import { ListTitle, MyPageBtn } from 'components';
import S from './styles';

const ListHeader = () => {
  return (
    <div className={S.HeaderContainer}>
      <ListTitle />
      <MyPageBtn />
    </div>
  );
};

export default ListHeader;
