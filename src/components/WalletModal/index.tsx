// this file is WalletModal and Provide a Network and Wallet List
import React, { useEffect, useState } from 'react';
import {
  ConnectNetWorkOne,
  ConnectNetWorkTow,
  ConnectWalletOne,
  ConnectWalletThree,
  ConnectWalletTow,
} from '../../contexts/ConnectWalletDATA';
import { Box, Button, FormControlLabel, Modal, Radio } from '@mui/material';
import { styled } from '@mui/system';
import Cros from '../../assets/icon/Cros.png';
import select from '../../assets/icon/select.png';
import Coin from '../../assets/icon/coin.png';
import TransactionWaiting from '../swap/Swap/SwapConfirmModal/TransactionWaiting';
import TransactionCompleted from '../swap/Swap/SwapConfirmModal/TransactionCompleted';
import SwapConfirmModal from '../swap/Swap/SwapConfirmModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CustomModal from '../Modal';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const styleError = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 7,
  paddingTop: 1,
  height: '30%',
  borderRadius: 2,
  overFlow: 'auto',
};
const ModalCustom = styled(Modal)({
  border: 'none',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});
const Title = styled('span')({
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '600',
});
const ViewMainView = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const ViewMain = styled('div')({
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: '3%',
  paddingRight: '3%',
});
const ViewMainActive = styled('div')({
  position: 'relative',
  borderWidth: '0px',
  borderStyle: 'solid',
  background: 'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: 15,
  paddingRight: 15,
  borderColor: 'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
});
const TitleControl = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '2%',
});
const Condition = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
});
const ConditionPink = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  color: '#D1982A',
  marginRight: 5,
  marginLeft: 5,
});
const ConnectButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
});
const ConnectButtonDisable = styled(Button)({
  width: '100%',
  background: 'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
  opacity: 0.3,
});
const SelectImg = styled('img')({
  position: 'absolute',
  left: '36%',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
});
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 15,
  marginBottom: 15,
});

const Span = styled('span')({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: 16,
  color: 'black',
});
const Warning = styled('span')({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: 16,
  color: 'red',
});
const MainDiv = styled('div')({
  alignItems: 'center',
  display: 'flex',
  cursor: 'pointer',
});
const TitleIcon = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
});
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
});
const Over = styled('div')({});
const Boxs = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '450px',
  height: 'auto',
  borderRadius: 10,
});

export type WalletModalProps = {
  NetworkData: any;
  connetNetworkFunction: Function;
  handleOpenError: Function;
  handleCloseError: Function;
  ErrorStatus: boolean;
  connetWalletFunction: Function;
  WalletData: any;
  Check: Boolean;
  Network: Function;
  setCheck: any;
  SelectData: Function;
  onClose: Function;
};
type ConnectNetworkType = {
  name: String;
  image: String;
};
type DataObject = {
  name: String;
  coin: String;
};
const nullObj = {
  name: '',
  coin: '',
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const WalletModal = (props: WalletModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [NetworkData, setNetworkData] = useState(nullObj);
  const [WalletData, setWalletData] = useState(nullObj);

  useEffect(() => {
    console.log(props.NetworkData)
    setNetworkData(props.NetworkData);
    setWalletData(props.WalletData);
  }, [props.NetworkData, props.WalletData]);
  return (
    <>
      <TitleView>
        <Title>Choose Network</Title>
        <img
          src={Cros}
          onClick={() => {
            props.onClose();
          }}
          alt="Image"
        />
      </TitleView>
      <Over>
        <ViewMainView>
          {ConnectNetWorkOne.map((val, i) => {
            return NetworkData.name === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select_Icon" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetNetworkFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          {ConnectNetWorkTow.map((val, i) => {
            return NetworkData.name === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetNetworkFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          <ViewMain>
            <TitleIcon
              onClick={() => {
                props.handleOpenError(true);
              }}
            >
              Error Modal
            </TitleIcon>
          </ViewMain>
          <ModalCustom
            open={props.ErrorStatus}
            onClose={() => {
              props.handleCloseError(false);
            }}
          >
            <Box sx={styleError}>
              <TitleView>
                <Title>Wrong Network</Title>
                <img
                  src={Cros}
                  onClick={() => {
                    props.handleCloseError(false);
                  }}
                  alt="Cros"
                />
              </TitleView>
              <MainDiv>
                <ImageIcon src={Coin} alt="Coin" />
                <Span>Arbitrum</Span>
              </MainDiv>
              <br />
              <Warning>You select wrong network please select anothor network</Warning>
              <br />
              <br />
              <ConnectButton variant="text" onClick={() => {}}>
                Ok
              </ConnectButton>
            </Box>
          </ModalCustom>
        </ViewMainView>
        <Title>Choose Wallet</Title>
        <ViewMainView>
          {ConnectWalletOne.map((val, i) => {
            return WalletData.name === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetWalletFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          {ConnectWalletTow.map((val, i) => {
            return WalletData.name === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetWalletFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          {ConnectWalletThree.map((val, i) => {
            return WalletData.name === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetWalletFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
      </Over>
      <TitleControl>
        <FormControlLabel control={<Radio onClick={props.setCheck} checked={props.Check ? true : false} />} label="" />
        <Condition>
          I accept the <ConditionPink>Terms of Services</ConditionPink>&
          <ConditionPink>Privacy Policy</ConditionPink>
        </Condition>
      </TitleControl>
      {props.Check ? (
        <ConnectButton
          variant="text"
          onClick={() => {
            props.SelectData();
          }}
        >
          Connect Wallet
        </ConnectButton>
      ) : (
        <ConnectButtonDisable variant="text">Connect Wallet</ConnectButtonDisable>
      )}
    </>
  );
};

export default WalletModal;
