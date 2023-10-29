import { IMessage } from 'types';
import { AIMessage, ClientMessage } from 'components';

const Message = ({ message: { content, type, from } }: { message: IMessage }) => {
  console.log(content);

  return (
    <>
      {from === 'AI' && <AIMessage message={{ content, type, from }} />}
      {from === 'Client' && <ClientMessage message={{ content, type, from }} />}
    </>
  );
};
export default Message;
