import { FormEvent } from 'react';
// import { motion } from 'framer-motion';
import { Input } from 'antd';
// import { SendOutlined, RobotOutlined } from '@ant-design/icons';

import {
  useAskInput,
  useAskInputActions,
  useMessagesActions,
  useSelectedItem,
  useUserOpenAI,
} from 'store';
import { ask } from 'apis';
/*
const prefixIcon = (handleCick: any) => {
  return (
    <div onClick={handleCick}>
      <RobotOutlined style={{ fontSize: '16px', color: '#5b21b6' }} rev={undefined} />
    </div>
  );
};

const suffixIcon = (handleClick: any) => {
  return (
    <motion.div whileHover={{ scale: 1.2, rotate: -45 }} onClick={handleClick}>
      <SendOutlined style={{ fontSize: '16px', color: '#5b21b6' }} rev={undefined} />
    </motion.div>
  );
};
*/
const AskInput = () => {
  const askInput = useAskInput();
  const openAI = useUserOpenAI();
  const { setAskInput, resetAskInput } = useAskInputActions();
  const { addMessage } = useMessagesActions();
  const selectedItem = useSelectedItem();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const askMessage = {
      from: 'Client',
      type: 'question',
      content: askInput,

      item: selectedItem,
    };
    addMessage(askMessage);
    resetAskInput();

    const data = {
      apikey: openAI,
      userQuestion: askInput,
      productNo: selectedItem?.no as string,
    };
    //console.log('샹성', askInput, selectedItem);
    const response = await ask(data);

    console.log('details', response);
    const detailsMessage = {
      from: 'AI',
      type: 'answer',
      content: response,
      item: selectedItem,
    };
    addMessage(detailsMessage);
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5">
      <Input
        placeholder="추천 질문 리스트"
        /*prefix={(()=>prefixIcon()) as ReactNode}
        suffix={()=>suffixIcon(handleSubmit)}*/
        size="large"
        value={askInput}
        onChange={(e) => setAskInput(e.target.value)}
        type="text"
        className="border-grey-500"
      />
    </form>
  );
};

export default AskInput;
