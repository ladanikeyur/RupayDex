import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import styled from '@emotion/styled';
import success from '../../../../../assets/icon/success.png';
import Error from '../../../../../assets/icon/Error.png';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { handleClick } from '../../../../../store/Actions';

const AlertNotification = styled('div')({
  width: '100%',
  backgroundColor: '#F7F7F7',
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  maxWidth: '70%',
});
const AlertTitle = styled('p')({
  marginLeft: 5,
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: '500',
  color: 'rgba(0, 0, 0, 0.65)',
});
const AlertTitleSuccess = styled('span')({
  marginLeft: 5,
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: '500',
  color: 'black',
});
const AlertTitleError = styled('span')({
  marginLeft: 5,
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: '500',
  color: 'red',
});
const Btn = styled('span')({
  color: '#BB36FF',
});
const Img = styled('img')({
  marginTop: 15,
});

export interface State extends SnackbarOrigin {
  open: boolean;
}
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const Notification = () => {
  const dispatch: AppDispatch = useDispatch();
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const Alert: any = useSelector((state: ArticleState) => state.Alert);
  const { vertical, horizontal, open } = state;
  React.useEffect(() => {
    console.log('Alert', Alert);
    setState(Alert);
  }, [Alert]);
  //   const handleClick = () => {
  //     setState({ open: true, vertical: 'top', horizontal: 'right' });
  //   };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  //   type:"Error"
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <AlertNotification>
          {Alert.type === 'Error' ? (
            <Img height={72} width={72} src={Error} />
          ) : (
            <Img height={72} width={72} src={success} />
          )}

          <AlertTitle>
            Swap exactly{' '}
            {Alert.type === 'Error' ? (
              <AlertTitleError>10 USDT</AlertTitleError>
            ) : (
              <AlertTitleSuccess>10 USDT</AlertTitleSuccess>
            )}{' '}
            for{' '}
            {Alert.type === 'Error' ? (
              <AlertTitleError>6.24578 MATIC.</AlertTitleError>
            ) : (
              <AlertTitleSuccess>6.24578 MATIC.</AlertTitleSuccess>
            )}
            <br /> <Btn>View on Explorer</Btn>
          </AlertTitle>
        </AlertNotification>
      </Snackbar>
    </div>
  );
};

export default Notification;
