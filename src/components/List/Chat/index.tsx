import { ChatHeader, ChatMsg } from 'components';
const ChatContainer = () => {
  return (
    <div className={S.ChatLayout}>
      <div className={S.ChatContainer}>
        <ChatHeader />
        <ChatMsg />
      </div>
    </div>
  );
};

export default ChatContainer;
const ChatLayout = 'w-2/5 bg-zinc-900 rounded-3xl p-5';
const ChatContainerStyle = 'h-full flex flex-col justify-between';

const S = {
  ChatContainer: ChatContainerStyle,
  ChatLayout,
};
