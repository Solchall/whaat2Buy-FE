import { IMessage } from 'types';
import { AIMessage, ClientMessage } from 'components';

const Message = ({ message: { content, type, from, item } }: { message: IMessage }) => {
  console.log(content);

  return (
    <>
      {from === 'AI' && <AIMessage message={{ content, type, from, item }} />}
      {from === 'Client' && <ClientMessage message={{ content, type, from }} />}
    </>
  );
};
export default Message;
