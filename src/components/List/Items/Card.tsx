import { motion } from 'framer-motion';
import { HeartOutlined, QuestionOutlined } from '@ant-design/icons';
import { IItem, IReqLikes } from 'types';
import S from './styles';
import { likes } from 'apis';
import { CreateClientMessage } from 'constant';
import { useMessagesActions } from 'store';

const Card = ({ item }: { item: IItem }) => {
  const { addMessage } = useMessagesActions();
  const handleHeartBtn = async (clothId: IReqLikes['clothId']) => {
    const response = await likes({ clothId });
    console.log(response, item);
  };

  const handleAskBtn = async (name: string, clothId: IReqLikes['clothId']) => {
    const AskMessage = {
      from: 'Client',
      type: 'initial',
      content: CreateClientMessage(name, 'initial'),
    };
    addMessage(AskMessage);
    console.log(clothId);
  };
  return (
    <motion.div variants={S.ItemAnimation} className={S.CardLayout}>
      <div className={S.CardContainer}>
        <div className={S.IconContainer} style={{ zIndex: 50 }}>
          <button onClick={() => handleAskBtn(item.name, item.no)} className={S.AskButton}>
            <QuestionOutlined rev={undefined} style={S.AskIcon} />
          </button>

          <button
            style={{ zIndex: -1 }}
            onClick={() => handleHeartBtn(item.no)}
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
      </div>
    </motion.div>
  );
};
export default Card;
