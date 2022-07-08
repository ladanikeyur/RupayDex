// this is a TransactionCompleted file and Provide a modal
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { Component } from 'react';
import Completed from '../../../../../assets/icon/Completed.svg';
import MataMask from '../../../../../assets/icon/MataMask.svg';
import Cros from '../../../../../assets/icon/Cros.png';

const Title = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: 'black',
  textAlign: 'center',
  margin: 'auto',
  display: 'block',
  marginTop: 20,
});
const SubTitle = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  textAlign: 'center',
  color: '#DC7FB6',
  margin: 'auto',
  display: 'block',
  marginTop: 10,
});
const CompletedIcon = styled('img')({
  height: '70px',
  width: '70px',
  margin: 'auto',
  display: 'block',
});
const Buttons = styled(Button)({
  width: '100%',
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  textTransform: 'initial',
  marginTop: 20,
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
});
const ImagDiv = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
const Main = styled('div')({
  marginTop: 10,
});

export type TransactionCompletedProps = {
  handleClose: () => void;
  transactionUrl: string | null;
  watchAssetHandler: any;
};
const TransactionCompleted = (props: TransactionCompletedProps) => {
  return (
    <Main>
      <ImagDiv>
        <CloseIcon src={Cros} onClick={props.handleClose} alt="Icon" />
      </ImagDiv>
      <CompletedIcon src={Completed} alt="Image" />
      <Title>Transaction Submitted</Title>
      <SubTitle>View on Explorer</SubTitle>
      <Buttons>
        Add USDT to
        <BtnIcon src={MataMask} alt="MataMask" />
        MetaMask
      </Buttons>
    </Main>
  );
};

export default TransactionCompleted;
