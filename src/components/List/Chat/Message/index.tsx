import { IMessage } from 'types';
import { AIMessage, ClientMessage } from 'components';

const Message = ({ message: { content, type, from, item, img } }: { message: IMessage }) => {
  console.log(content, item);

  return (
    <>
      {from === 'AI' && <AIMessage message={{ content, type, from, item, img }} />}
      {from === 'Client' && <ClientMessage message={{ content, type, from, item }} />}
    </>
  );
};
export default Message;
