import { ChatHeader, ChatsList } from 'components';
const ChatContainer = () => {
  return (
    <div className={S.ChatLayout}>
      <div className={S.ChatContainer}>
        <ChatHeader />
        <ChatsList />
      </div>
    </div>
  );
};

export default ChatContainer;
const ChatLayout = 'w-2/5 bg-zinc-900 rounded-3xl p-5';
const ChatContainerStyle = 'h-full';

const S = {
  ChatContainer: ChatContainerStyle,
  ChatLayout,
};
