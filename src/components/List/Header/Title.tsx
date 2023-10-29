import { MainTitles } from 'constant';
import S from './styles';
import { useNavigate } from 'react-router-dom';
const Title = () => {
  const navigation = useNavigate();

  const handlClicked = () => {
    navigation('/');
  };
  return (
    <h2 className={S.TitleWrapper} onClick={handlClicked}>
      <span className={S.Title}>{MainTitles}</span>
      <br></br>
    </h2>
  );
};

export default Title;
