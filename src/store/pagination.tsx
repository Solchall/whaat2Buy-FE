import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IUser } from 'types';
/*

interface IPagination extends UserState {
  actions: UserActions;
}

interface UserState {
  email: string;
  userId: string;
  accessToken: string;
  username: string;
  openAI: string;
  password?: string;
}
interface UserActions {
  setEmail: (input: string) => void;
  setUserId: (input: string) => void;
  setAccessToken: (input: string) => void;
  setUsername: (input: string) => void;
  setOpenAI: (input: string) => void;
  resetUser: () => void;
  setUserInfo: (input: Pick<UserState, 'email' | 'openAI' | 'username'>) => void;
}
*/

const UserStore = create<IUser>()(
  devtools((set) => ({
    email: '',
    userId: '',
    accessToken: '',
    username: '',
    openAI: '',

    actions: {
      setEmail: (input) => set(() => ({ email: input }), false, 'setEmail'),
      setUserId: (input) => set(() => ({ userId: input }), false, 'setUserId'),
      setAccessToken: (input) => set(() => ({ password: input }), false, 'setAccessToken'),
      setUsername: (input) => set(() => ({ username: input }), false, 'setUsername'),
      setOpenAI: (input) => set(() => ({ openAI: input }), false, 'setOpenAI'),
      resetUser: () =>
        set(
          () => ({ email: '', userId: '', accessToken: '', username: '', openAI: '' }),
          false,
          'resetUser',
        ),
      setUserInfo: ({ username, email, openAI }) =>
        set(() => ({ username: username, email: email, openAI: openAI }), false, 'setUserInfo'),
    },
  })),
);

const useUserEmail = () => UserStore((state) => state.email);
const useUserId = () => UserStore((state) => state.userId);
const useUserAccessToken = () => UserStore((state) => state.accessToken);
const useUserName = () => UserStore((state) => state.username);
const useUserOpenAI = () => UserStore((state) => state.openAI);

// 🎉 one selector for all our actions
const useUserActions = () => UserStore((state) => state.actions);

export { useUserEmail, useUserId, useUserAccessToken, useUserName, useUserOpenAI, useUserActions };
