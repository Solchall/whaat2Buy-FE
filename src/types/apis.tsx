import { LoginFormState, SignUpFormState } from './auth';
import { IItem } from './items';

interface IResLogin {
  id: string;
  accessToken: string;
}

interface IResSignup {
  success: boolean;
}

type IReqLogin = LoginFormState;
type IReqSignup = SignUpFormState;
type IResAccessToken = IResLogin;
type IResRefreshToken = IResLogin;
type ILogoutAll = IResSignup;
interface IReqGetList {
  apikey: string;
  userNeed: string;
}

interface IResGetFilterList {
  status: number;
  data: {
    status: number;
    filtering: {
      result: boolean;
      clothes: IItem[] | [];
    };
  };
}
interface IResGetMagazineList {
  status: number;

  data: {
    magazines: {
      result: boolean;
      clothes: IItem[] | [];
    };
  };
}

interface IReqLikes {
  clothId: string;
}

type IResLikes = IResSignup;
interface IInfo {
  username: string;
  email: string;
  openAI: string;
  password: string;
}

export type {
  IReqGetList,
  IResGetFilterList,
  IResGetMagazineList,
  IReqLogin,
  IResLogin,
  IReqSignup,
  IResSignup,
  IResAccessToken,
  IResRefreshToken,
  ILogoutAll,
  IInfo,
  IReqLikes,
  IResLikes,
};
