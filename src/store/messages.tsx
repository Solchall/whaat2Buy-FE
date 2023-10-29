import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IMessages } from 'types';

function createInitialMsg(query: string) {
  const initialMessage = `안녕하세요!! 당신을 위한 온라인 가상 점원 서비스 "🙇‍♀️ 뭐 찾으세요?" 입니다. ⭐︎${query}⭐︎를 찾고 계시군요? 사용자님을 위한 최고의 상품들입니다. 더 자세히 알아가고 싶은 상품은 🔎를, 나중에 다시 보고 싶은 상품은 💜를 눌러주세요.`;
  return initialMessage;
}

const MessagesStore = create<IMessages>()(
  devtools((set) => ({
    messageArray: [],

    actions: {
      resetMessageArray: () => set(() => ({ messageArray: [] }), false, 'resetMessageArray'),
      addMessage: (message) =>
        set((state) => ({ messageArray: [...state.messageArray, message] }), false, 'addMessage'),
      addInitialMessage: (query) =>
        set(
          (state) => ({
            messageArray: [
              ...state.messageArray,
              { type: 'intial', from: 'AI', content: createInitialMsg(query) },
            ],
          }),
          false,
          'addInitialMessage',
        ),
    },
  })),
);

const useMessages = () => MessagesStore((state) => state.messageArray);

// 🎉 one selector for all our actions
const useMessagesActions = () => MessagesStore((state) => state.actions);

export { useMessages, useMessagesActions };
