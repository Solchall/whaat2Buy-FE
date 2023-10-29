import { Message } from 'components';
import { useMessages } from 'store';
import { IMessage } from 'types';

const Messages = () => {
  const messages = useMessages();
  console.log(messages);
  return (
    <>
      {messages.map((message: IMessage, idx: number) => (
        <Message message={message} key={idx} />
      ))}
    </>
  );
};

export default Messages;
