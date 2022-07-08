import styled from '@emotion/styled';
import React, { Component } from 'react';
import Check from '../../../../../assets/icon/Check.png';
import Cros from '../../../../../assets/icon/Cros.png';
import { Button } from '@mui/material';

const Title = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: 'red',
  textAlign: 'center',
  margin: 'auto',
  display: 'block',
  marginTop: 20,
});
const SubTitle = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '14px',
  textAlign: 'center',
  color: 'black',
  margin: 'auto',
  display: 'block',
  marginTop: 10,
  marginBottom: 20,
});
const CompletedIcon = styled('img')({
  height: '70px',
  width: '70px',
  margin: 'auto',
  display: 'block',
});
const Buttons = styled(Button)({
  borderRadius: 12,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  textTransform: 'initial',
  display: 'block',
  margin: 'auto',
});
const BtnIcon = styled('img')({
  height: '32px',
  width: '32px',
  marginLeft: 3,
  marginRight: 3,
});
const CloseIcon = styled('img')({
  height: '15px',
  width: '15px',
  cursor:'pointer'
});
const ImagDiv = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
const Main = styled('div')({
  marginTop: 10,
});

export type TransactionFailedProps = {
  handleClose: () => void;
  transactionUrl: string | null;
  watchAssetHandler: any;
};

const TransactionFailed = (props: TransactionFailedProps) => {
  return (
    <Main>
      <ImagDiv>
        <CloseIcon src={Cros} onClick={props.handleClose} alt="Icon" />
      </ImagDiv>
      <CompletedIcon src={Check} alt="Image" />
      <Title>Transaction Failed</Title>
      <SubTitle>
        This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage
        tolerance.
      </SubTitle>
      <Buttons onClick={props.handleClose}>Close</Buttons>
    </Main>
  );
};

export default TransactionFailed;
