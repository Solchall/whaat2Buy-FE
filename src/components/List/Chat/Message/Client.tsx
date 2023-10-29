import { IMessage } from 'types';

const ClientMessage = ({ message: { content, type, from } }: { message: IMessage }) => {
  return (
    <div>
      {content} {type} {from}
    </div>
  );
};

export default ClientMessage;
