// this is a swap index file and Provide a Swap modal layout
import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { handleClick } from '../../../store/Actions';
import CustomModal from '../../Modal';
import CurrencyInput from './CurrencyInput';
import CurrencyOutput from './CurrencyOutput';
import SwapConfirmModal from './SwapConfirmModal';
import HighSlippage from './SwapConfirmModal/HighSlippage';
import TransactionCompleted from './SwapConfirmModal/TransactionCompleted';
import TransactionFailed from './SwapConfirmModal/TransactionFailed';
import TransactionWaiting from './SwapConfirmModal/TransactionWaiting';
import SwapHeader from './SwapHeader';
import SwapRouter from './SwapRouter';
import SwapTransactionDetails from './SwapTransactionDetails';

const MainDiv = styled('div')({
  borderRadius: '24px',
  width: '100%',
  backgroundColor:'white'
});
const OrderBtn = styled(Button)({
  margin: 15,
  width: '90%',
  backgroundColor: '#3B3C4E',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '10%',
  marginTop: '10%',
  textTransform: 'initial',
  fontFamily:'Inter',
  fontSize:'16px',
  fontWeight:700,
  '&:hover': {
    backgroundColor: '#3B3C4E',
  },
});
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
const WrongBtn = styled(Button)({
  margin: 15,
  width: '90%',
  background: 'red',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '10%',
  marginTop: '10%',
  textTransform: 'initial',
});

type WalletType = {
  name: String;
  image: String;
  Subname: String;
  Price: String;
};
type ConnectNetworkType = {
  name: String;
  image: String;
};
export type SwapProps = {
  btnTitle: String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const Swap = (props: SwapProps) => {
  const dispatch: AppDispatch = useDispatch();
  const ConnectWallet: WalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const [TransactionWaitingopen, setTransactionWaitingOpen] = useState(false);
  const [TransactionCompletedopen, setTransactionCompletedOpen] = useState(false);
  const [TransactionFaildopen, setTransactionFaildopen] = useState(false);
  const [SwapConfirmModalopen, setSwapConfirmModalOpen] = useState(false);
  const [HighSlippageModalopen, setHighSlippageModalOpen] = useState(false);
  const closeModel = () => {
    setTransactionWaitingOpen(false);
  };
  const closeTransactionCompletedModel = () => {
    setTransactionCompletedOpen(false);
  };
  const closeSwapConfirmModalopenModel = () => {
    setSwapConfirmModalOpen(false);
  };
  const closeTransactionFaildModel = () => {
    setTransactionFaildopen(false);
  };
  const closeHighSlippageModel = () => {
    setHighSlippageModalOpen(false);
  };
  return (
    <>
      <MainDiv>
        <SwapHeader transactionSettingHandler={null} />
        <CurrencyInput
          userInputTokenBalance={null}
          showMaxButton={null}
          inputValue={null}
          inputOnChangeHandler={null}
          toggleCurrencyModal={null}
          selectedCurrency="Available: 500"
        />
        <CurrencyOutput
          inputOnChangeHandler={null}
          inputValue={null}
          selectedCurrency={null}
          toggleCurrencyModal={null}
        />
        <SwapRouter btnTitle={props.btnTitle} liquiditySources={null} router={null} />
        {/* <CustomModal
          modalTitle=""
          children={<Boxs><TransactionWaiting swapCurrency={null} receivedCurrency={null} /></Boxs>}
          isOpen={TransactionWaitingopen}
          close={() => {
            closeModel();
          }}
        /> */}
        {/* <CustomModal
          modalTitle=""
          children={
            <Boxs>
              <TransactionCompleted
                handleClose={() => {
                  closeTransactionCompletedModel();
                }}
                transactionUrl={null}
                watchAssetHandler={null}
              />
            </Boxs>
          }
          isOpen={TransactionCompletedopen}
          close={() => {
            closeTransactionCompletedModel();
          }}
        />
        <CustomModal
          children={
            <Boxs>
              <SwapConfirmModal
                inputToken={null}
                outputToken={null}
                swapAmount={null}
                expectedOutput={null}
                minReceived={null}
                allowedSlippage={null}
                gasEstimateInUSD={null}
                priceImpact={null}
                swapHandler={null}
                swapTXStatus={null}
                handleClose={() => {
                  closeSwapConfirmModalopenModel();
                }}
              />
            </Boxs>
          }
          modalTitle=""
          isOpen={SwapConfirmModalopen}
          close={() => {
            closeSwapConfirmModalopenModel();
          }}
        />
        <CustomModal
          children={
            <Boxs>
              <TransactionFailed
                handleClose={() => {
                  closeTransactionFaildModel();
                }}
                transactionUrl={null}
                watchAssetHandler={null}
              />
            </Boxs>
          }
          modalTitle=""
          isOpen={TransactionFaildopen}
          close={() => {
            closeTransactionFaildModel();
          }}
        />
        <CustomModal
          children={
            <Boxs>
              <HighSlippage
                handleClose={() => {
                  closeHighSlippageModel();
                }}
                transactionUrl={null}
                watchAssetHandler={null}
              />
            </Boxs>
          }
          modalTitle=""
          isOpen={HighSlippageModalopen}
          close={() => {
            closeHighSlippageModel();
          }}
        /> */}
        {ConnectWallet.name === '' && CoinNetwork.name !== '' ? (
          <WrongBtn>Wrong Network</WrongBtn>
        ) : (
          <OrderBtn
            onClick={
              ConnectWallet.name !== '' && CoinNetwork.name !== ''
                ? () => {
                  setTransactionWaitingOpen(true);
                  setTimeout(() => {
                    setTransactionWaitingOpen(false);
                    setTransactionCompletedOpen(true);
                  }, 1000);
                }
                : () => {
                  setSwapConfirmModalOpen(true);
                  setTransactionFaildopen(true);
                  setHighSlippageModalOpen(true);
                  // dispatch(handleClick({ type: 'Success', open: true, vertical: 'top', horizontal: 'right' }));
                  // setTimeout(() => {
                  //   dispatch(handleClick({ type: 'Error', open: true, vertical: 'top', horizontal: 'right' }));
                  // }, 4000);
                }
            }
          >
            {ConnectWallet.name !== '' && CoinNetwork.name !== '' ? 'Swap' : props.btnTitle}
          </OrderBtn>
        )}
      </MainDiv>
      {props.btnTitle === 'Confirm Order' ? (
        ConnectWallet.name !== '' && CoinNetwork.name !== '' ? (
          <SwapTransactionDetails
            btnTitle={props.btnTitle}
            expectedOutput={null}
            priceImpact={null}
            minReceived={null}
            maxSent={null}
            allowedSlippage={null}
          />
        ) : null
      ) : null}
    </>
  );
};

export default Swap;
