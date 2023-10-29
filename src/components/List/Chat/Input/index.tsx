import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Input } from 'antd';
import { SendOutlined, RobotOutlined } from '@ant-design/icons';

import { useAskInput, useAskInputActions } from 'store';

const prefixIcon = <RobotOutlined style={{ fontSize: '16px', color: '#5b21b6' }} rev={undefined} />;

const suffixIcon = (
  <motion.div whileHover={{ scale: 1.2, rotate: -45 }}>
    <SendOutlined style={{ fontSize: '16px', color: '#5b21b6' }} rev={undefined} />
  </motion.div>
);

const AskInput = () => {
  const askInput = useAskInput();
  const { setAskInput, resetAskInput } = useAskInputActions();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(askInput);
    // 서버 채팅에 emit
    resetAskInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="추천 질문 리스트"
        prefix={prefixIcon}
        suffix={suffixIcon}
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
