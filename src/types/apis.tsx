import { LoginFormState, ISignupForm } from './auth';
import { IItem } from './items';

interface IResLogin {
  id: string;
  accessToken: string;
}

interface IResSignup {
  success: boolean;
}

type IReqLogin = LoginFormState;
type IReqSignup = ISignupForm;
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

interface IReqItem {
  apikey: string;
  productUrl: string;
}
interface IResDetail {
  simple_detail: string;
  message: string;
}
interface IResSize {
  size_reco: string;
  message: string;
}

interface IResReview {
  review_summ: string;
  message: string;
}
interface IReqAddAskedItem {
  owner: string; // userId
  type: string; // initial Demand
  clothId: string; // clothId
  message: string; //asked Message
}

interface IResAddAskedItem {
  data: {
    success: boolean;
    message: string;
  };
}
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
  IReqAddAskedItem,
  IResAddAskedItem,
  IReqItem,
  IResDetail,
  IResSize,
  IResReview,
};
