interface IArticle {
  modal: string;
}
interface ICoin {
  name: String;
  image: String;
}

interface Alert {
  open: Boolean;
  vertical: String;
  horizontal: String;
  type:String
}

type ArticleState = {
  Alert:Alert,
  modal: any;
  CoinDetail: {
    name: String;
    image: String;
    fullName: String;
  };
  receiveCoinDetail: {
    name: String;
    image: String;
    fullName: String;
  };
  ConnectWallet: {
    name: String;
    image: String;
    Subname: String;
    Price: String;
  };
  ConnectNetwork: {
    name: String;
    image: String;
  };
};

type ArticleAction = {
  type: string;
  modal: IArticle;
};
type CoinAction = {
  type: string;
  Coin: ICoin;
};

type AlertAction = {
  type: string;
  Alert: Alert;
};
type StatusAction = {
  type: string;
  Status: StatusPayload;
};

type DispatchType = (
  args: ArticleAction | CoinAction | AlertAction,
) => ArticleAction | CoinAction | StatusAction | AlertAction;
