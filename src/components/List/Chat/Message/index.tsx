import { IMessage } from 'types';
import { AIMessage, ClientMessage } from 'components';

const Message = ({ message: { content, type, from, item, imgUrl } }: { message: IMessage }) => {
  console.log(content);

  return (
    <>
      {from === 'AI' && <AIMessage message={{ content, type, from, item, imgUrl }} />}
      {from === 'Client' && <ClientMessage message={{ content, type, from }} />}
    </>
  );
};
export default Message;
