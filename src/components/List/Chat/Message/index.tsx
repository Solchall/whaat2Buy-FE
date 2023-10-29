import { IMessage } from 'types';

const Message = ({ message }: { message: IMessage }) => {
  console.log(message.content);
  return (
    <div className="place-self-start rounded-2xl bg-zinc-800 text-white max-w-[75%] p-4 my-4">
      {message.content} {message.type} {message.from}
    </div>
  );
};

export default Message;
