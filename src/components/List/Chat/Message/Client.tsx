import { IMessage } from 'types';

const ClientMessage = ({ message: { content, type, from, item } }: { message: IMessage }) => {
  console.log(item);
  return (
    <div className="place-self-end rounded-2xl bg-zinc-800 text-white max-w-[75%] p-4 my-4">
      {content} {type} {from}
    </div>
  );
};

export default ClientMessage;
