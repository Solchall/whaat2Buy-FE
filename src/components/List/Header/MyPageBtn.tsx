import { IdcardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import S from './styles';

const MyPageBtn = () => {
  const navigation = useNavigate();
  const handleUserClick = () => {
    navigation('/mypage');
  };
  return (
    <>
      <button onClick={handleUserClick} className={S.Button}>
        <IdcardOutlined rev={undefined} style={S.Icon} />
      </button>
    </>
  );
};

export default MyPageBtn;
