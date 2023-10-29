import { ThunderboltOutlined } from '@ant-design/icons';
import { useListType, useListTypeActions } from 'store';
import { IMessage } from 'types';

const AIMessage = ({ message: { content, type, from } }: { message: IMessage }) => {
  console.log(content);

  const { setFilterType, setMagazineType } = useListTypeActions();
  const listType = useListType();

  const handleBtnClick = () => {
    console.log(listType);

    if (listType === 'filter') {
      setMagazineType();
    } else {
      setFilterType();
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
          onClick={() => handleBtnClick()}
        >
          <ThunderboltOutlined rev={undefined} className="mr-1.5" />
          {listType === 'filter' ? '패션 에디터 트랜드 픽' : '상품 정보 기반 픽'} 보러가기
        </button>
      )}
    </>
  );
};
export default AIMessage;
