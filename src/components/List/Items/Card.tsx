import { motion } from 'framer-motion';
import { HeartOutlined, QuestionOutlined } from '@ant-design/icons';
import { IItem } from 'types';
import S from './styles';

const Card = ({ item }: { item: IItem }) => {
  return (
    <motion.div variants={S.ItemAnimation} className={S.CardLayout}>
      {/*
      페이지 이동에 따른 애니메이션 적용 잘 되는지 확인하기 위해 Link 연결한 코드
      <Link to={`/item=${item.no}"`}>
        <div>
          <img src={item.img} />
          <span className="text-white">{item.no}</span>
          <button className="text-white" onClick={e=>handleProductBtn(item.url)}>제품 선택</button>
        </div>
      </Link>*/}
      <motion.div className={S.CardContainer}>
        <div className={S.IconContainer} style={{ zIndex: 50 }}>
          <button onClick={(e) => console.log('ask Clicked!!!', e)} className={S.AskButton}>
            <QuestionOutlined rev={undefined} style={S.AskIcon} />
          </button>

          <button
            style={{ zIndex: -1 }}
            onClick={(e) => console.log('like Clicked!!!', e)}
            className={S.HeartButton}
          >
            <HeartOutlined rev={undefined} style={S.HeartIcon} />
          </button>
        </div>
        <div className={S.CardImgContainer} style={{ zIndex: 30 }}>
          <img className={S.CardImg} src={item.img} />
          <div className={S.CardShadow}></div>
        </div>
        <div className={S.CardInfoContainer}>
          <div className={S.CardHoverControl} style={{ zIndex: 40 }}>
            <div className={S.CardSubInfoContainer}>
              <div className={S.CardBrand}>{item.brand}</div>
              <div className={S.CardPice}>{item.price}</div>
            </div>

            <p className={S.CardName}>{item.name}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Card;
