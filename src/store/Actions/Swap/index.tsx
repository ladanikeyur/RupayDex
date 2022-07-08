import * as actionTypes from '../../actionTypes';

export function onSelectCoin(Coin: ICoin) {
    const action: CoinAction = {
      type: actionTypes.SELECT_TOKEN,
      Coin,
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }
  export function onReceiveCoin(Coin: ICoin) {
    const action: CoinAction = {
      type: actionTypes.RECEIVE_TOKEN,
      Coin,
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }

  export function handleClick(Alert: Alert) {
    const action: AlertAction = {
      type: actionTypes.ALERT,
      Alert,
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }
  