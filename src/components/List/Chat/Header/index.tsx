import { ChatTitle, NewShopBtn } from 'components';
import S from '../styles';

const Header = () => {
  return (
    <div className={S.HeaderContainer}>
      <ChatTitle />
      <NewShopBtn />
    </div>
  );
};

export default Header;
