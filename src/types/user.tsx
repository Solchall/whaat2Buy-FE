interface IUser extends UserState {
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

export type { IUser };
