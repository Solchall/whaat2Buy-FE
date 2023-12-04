import { motion } from 'framer-motion';
import { HeartOutlined, QuestionOutlined } from '@ant-design/icons';
import { IItem, IMessage, IReqLikes } from 'types';
import S from './styles';
import { likes, addAskedCloth, details } from 'apis';
import { CreateClientMessage } from 'constant';
import {
  useMessagesActions,
  useQuery,
  useSelectedItemActions,
  useUserId,
  useUserOpenAI,
} from 'store';

const handleHeartBtn = async (clothId: IReqLikes['clothId']) => {
  const response = await likes({ clothId });
  console.log(response);
};

const handleAskBtn = async (
  item: IItem,
  userId: string,
  query: string,
  openAI: string,
  addMessage: (input: IMessage) => void,
  setSelectedItem: (input: IItem) => void,
) => {
  const AskMessage = {
    from: 'Client',
    type: 'initial',
    content: CreateClientMessage(item.name, 'initial'),
    item: item,
  };
  const data = {
    owner: userId,
    type: 'initial Demand',
    clothId: item.no,
    message: query,
  };

  setSelectedItem(item);

  const response = await addAskedCloth(data);
  if (response.success) {
    addMessage(AskMessage);
    const data = {
      apikey: openAI,
      productNo: item.no,
    };
    const { message, simple_detail, img } = await details(data);
    if (message === 'ok') {
      console.log('details', simple_detail);
      const detailsMessage = {
        from: 'AI',
        type: 'answer',
        content: simple_detail,
        img: img,
        item: item,
      };
      addMessage(detailsMessage);
    }
  }
};

const Card = ({ item }: { item: IItem }) => {
  const userId = useUserId();
  const query = useQuery();
  const openAI = useUserOpenAI();
  const { addMessage } = useMessagesActions();
  const { setSelectedItem } = useSelectedItemActions();

  return (
    <motion.div variants={S.ItemAnimation} className={S.CardLayout}>
      <div className={S.CardContainer}>
        <div className={S.IconContainer} style={{ zIndex: 50 }}>
          <button
            onClick={() => handleAskBtn(item, userId, query, openAI, addMessage, setSelectedItem)}
            className={S.AskButton}
          >
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
              <div className={S.CardBrand}>{item.brand.split(' ')[0].slice(0, 5)}...</div>
              <div className={S.CardPice}>{item.price}</div>
            </div>

            <p className={S.CardName}>{item.name.slice(0, 10)}...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
