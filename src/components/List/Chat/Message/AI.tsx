import { ThunderboltOutlined } from '@ant-design/icons';
import { review, size } from 'apis';
import { useListType, useListTypeActions, useMessagesActions, useUserOpenAI } from 'store';
import { IMessage } from 'types';

const AIMessage = ({ message: { content, type, from, item } }: { message: IMessage }) => {
  console.log(content);
  const openAI = useUserOpenAI();
  const { setFilterType, setMagazineType } = useListTypeActions();
  const { addMessage } = useMessagesActions();
  const listType = useListType();

  const handleCategorySwitch = () => {
    console.log(listType);

    if (listType === 'filter') {
      setMagazineType();
    } else {
      setFilterType();
    }
  };
  console.log(from, item);
  const handleRecQuestion = async (type: string) => {
    const body = {
      apikey: openAI,
      productUrl: `https://www.musinsa.com/app/goods/${item?.no}`,
    };
    if (type === 'size' && item) {
      const { size_reco } = await size(body);
      addMessage({ from: 'AI', type: 'answer', item: item, content: size_reco });
    } else if (type === 'review' && item) {
      const { review_summ } = await review(body);
      addMessage({ from: 'AI', type: 'answer', item: item, content: review_summ });
    } else {
      console.log('기타 요청');
    }
  };
  return (
    <>
      <div className="place-self-start rounded-2xl bg-zinc-800 text-white max-w-[75%] p-4 my-4">
        {content} {type} {from}
      </div>

      {type === 'intial' && (
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
