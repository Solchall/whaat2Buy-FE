import { ThunderboltOutlined } from '@ant-design/icons';
import { review, size } from 'apis';
import { CreateClientMessage } from 'constant';
import {
  useListType,
  useListTypeActions,
  useMessagesActions,
  useSelectedItemActions,
  useUserOpenAI,
} from 'store';
import { IMessage } from 'types';

const AIMessage = ({ message: { content, type, from, item, img } }: { message: IMessage }) => {
  console.log(content, type, img);
  const openAI = useUserOpenAI();
  const { setFilterType, setMagazineType } = useListTypeActions();
  const { addMessage } = useMessagesActions();
  const { setSelectedItem } = useSelectedItemActions();

  const listType = useListType();

  const handleCategorySwitch = () => {
    console.log(listType);
    if (listType === 'filter') {
      setMagazineType();
    } else {
      setFilterType();
    }
  };

  const AskMessage = (item: IMessage['item'], type: string) => {
    const message = {
      from: 'Client',
      type: 'initial',
      content: CreateClientMessage(item?.name as string, type),
      item: item,
    };
    return message;
  };
  console.log(from, item);
  const handleRecQuestion = async (type: string) => {
    const body = {
      apikey: openAI,
      productNo: item?.no as string,
    };
    if (item) {
      setSelectedItem(item);
    }

    if (type === 'size' && item) {
      addMessage(AskMessage(item, type));
      const { size_reco } = await size(body);
      addMessage({ from: 'AI', type: 'answer', item: item, content: size_reco });
    } else if (type === 'review' && item) {
      addMessage(AskMessage(item, type));
      const { review_summ } = await review(body);
      addMessage({ from: 'AI', type: 'answer', item: item, content: review_summ });
    } else {
      console.log('기타 요청');
    }
  };
  return (
    <>
      <div className="place-self-start whitespace-pre-line rounded-2xl bg-zinc-800 text-white max-w-[75%] p-4 my-4">
        {content} {/*{type} {from}*/}
        {img && (
          <div>
            <img src={img} alt={item?.no} />
          </div>
        )}
      </div>

      {type === 'initial' && (
        <button
          className="text-white place-self-start border-2 border-zinc-800 text-zinc-300 py-1 px-2 rounded-xl hover:bg-zinc-800"
          onClick={() => handleCategorySwitch()}
        >
          <ThunderboltOutlined rev={undefined} className="mr-1.5" />
          {listType === 'filter' ? '패션 에디터 트랜드 픽' : '상품 정보 기반 픽'} 보러가기
        </button>
      )}
      {type === 'answer' && (
        <div className="max-w-[80%] flex flew-row justify-between">
          {/*<button
            className="text-white place-self-start border-2 border-zinc-800 text-zinc-300 py-1 px-2 rounded-xl hover:bg-zinc-800"
            onClick={() => handleRecQuestion('basic')}
          >
            <ThunderboltOutlined rev={undefined} className="mr-1.5" />
            기본 정보 요청
          </button>*/}
          <button
            className="text-white place-self-start border-2 border-zinc-800 text-zinc-300 py-1 px-2 rounded-xl hover:bg-zinc-800"
            onClick={() => handleRecQuestion('size')}
          >
            <ThunderboltOutlined rev={undefined} className="mr-1.5" />
            사이즈 정보 요청
          </button>
          <button
            className="text-white place-self-start border-2 border-zinc-800 text-zinc-300 py-1 px-2 rounded-xl hover:bg-zinc-800"
            onClick={() => handleRecQuestion('review')}
          >
            <ThunderboltOutlined rev={undefined} className="mr-1.5" />
            다른 사람 의견 요청
          </button>
        </div>
      )}
    </>
  );
};
export default AIMessage;
