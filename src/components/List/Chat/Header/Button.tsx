import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

const NewShopBtn = () => {
  const navigation = useNavigate();
  const startNewShopping = () => {
    console.log('start New Shopping');
    navigation('/');
  };

  return (
    <div className="cursor-pointer px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-400 to-pink-600 hover:bg-slate-800 text-white">
      <Button
        className="text-white block bg-zinc-800 hover:bg-slate-800 rounded-full px-5 py-2 border-none"
        onClick={startNewShopping}
        size="large"
        shape="round"
        icon={<ShoppingOutlined rev={undefined} />}
      >
        다시 쇼핑하기
      </Button>
    </div>
  );
};

export default NewShopBtn;
