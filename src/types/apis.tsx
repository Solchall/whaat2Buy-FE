import { LoginFormState, SignUpFormState } from './auth';
import { IItem } from './items';

type IReqLogin = LoginFormState;

interface IResLogin {
  id: string;
  accessToken: string;
}

type IReqSignup = SignUpFormState;
type IResAccessToken = IResLogin;

interface IResSignup {
  success: boolean;
}

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

export type {
  IReqGetList,
  IResGetFilterList,
  IResGetMagazineList,
  IReqLogin,
  IResLogin,
  IReqSignup,
  IResSignup,
  IResAccessToken,
};
