import { MainTitles } from 'constant';
import S from './styles';
const Title = () => {
  return (
    <h2 className={S.TitleWrapper}>
      <span className={S.Title}>{MainTitles}</span>
      <br></br>
    </h2>
  );
};

export default Title;
