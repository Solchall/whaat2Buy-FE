import * as S from './styles';

interface IMainTitle {
  textSize: number;
}

const MainTitle = ({ textSize }: IMainTitle) => {
  console.log(textSize);
  return (
    <h2 className={S.MainTitleWrapper(textSize)}>
      <span className={S.MainTitle}>뭐 찾으세요?</span>
      <br></br>
    </h2>
  );
};

export default MainTitle;
