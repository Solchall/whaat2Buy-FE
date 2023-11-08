import { IItem } from './items';

interface IMessages extends MessageState {
  actions: MessagesActions;
}

interface MessageState {
  messageArray: IMessage[];
}

interface MessagesActions {
  addMessage: (input: IMessage) => void;
  resetMessageArray: () => void;
  addInitialMessage: (query: string) => void;
}
interface IMessage {
  from: string;
  type?: string;
  content: string;
  item?: IItem;
  imgUrl?: string;
}

export type { IMessages, IMessage };
