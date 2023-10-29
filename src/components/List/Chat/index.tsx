import { ChatHeader } from 'components';
const ChatContainer = () => {
  return (
    <div className={S.ChatContainer}>
      <ChatHeader />
    </div>
  );
};

export default ChatContainer;

const ChatContainerStyle = 'h-full';

const S = {
  ChatContainer: ChatContainerStyle,
};
