import * as actionTypes from '../../actionTypes';

export function connetWallet(Coin: ICoin) {
  const action: CoinAction = {
    type: actionTypes.CONNECT_WALLET,
    Coin,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function connetNetwork(Coin: ICoin) {
  const action: CoinAction = {
    type: actionTypes.CONNET_NETWORK,
    Coin,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
