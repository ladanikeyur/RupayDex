// this is a SwapConfirmmpdel File and Provide a SwapConfirmation Modal
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { Component } from 'react';
import Cros from '../../../../assets/icon/Cros.png';
import ShortVartical from '../../../../assets/icon/ShortVartical.png';
import CurrencyInput from '../CurrencyInput';
import CurrencyOutput from '../CurrencyOutput';

const MainDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 15,
  marginRight: 15,
});
const Image = styled('img')({
  height: 15,
  width: 15,
  cursor:'pointer'
});
const Title = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 24,
});
const ETH = styled('span')({
  color: '#BB36FF',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
});
const ImgVarticalShort = styled('img')({
  height: '15px',
  width: '15px',
  marginLeft: 10,
  cursor: 'pointer',
});
const ShortView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  marginTop: 5,
});
const DIv = styled('div')({
  backgroundColor: '#F7F7F7',
  borderRadius: 24,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 15,
  padding: 10,
});
const Main = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 3,
  marginBottom: 3,
});
const Text = styled('span')({
  color: '#b0b0b0',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
});
const Price = styled('span')({
  color: 'black',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
});
const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});
const Pay = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
  fontFamily: 'Inter',
});
const Max = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: '#BB36FF',
  fontFamily: 'Inter',
});

const OrderBtn = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '2%',
  marginTop: '1%',
  textTransform: 'initial',
});

type Currency = {};
type ENUM = {};
type SWAP = {};
type ERROR = {};
type WAITING = {};
type COMPLETED = {};
export type SwapConfirmModalProps = {
  handleClose: Function;
  inputToken: Currency | null;
  outputToken: Currency | null;
  swapAmount: number | null;
  expectedOutput: number | null;
  minReceived: number | null;
  allowedSlippage: number | null;
  gasEstimateInUSD: number | null;
  priceImpact: number | null;
  swapHandler: any;
  swapTXStatus: ENUM | SWAP | ERROR | WAITING | COMPLETED | null;
};

const SwapConfirmModal = (props: SwapConfirmModalProps) => {
  return (
    <>
      <MainDiv>
        <Title>Swap Confirmation</Title>
        <Image
          src={Cros}
          onClick={() => {
            props.handleClose(false);
          }}
        />
      </MainDiv>
      <CurrencyInput
        userInputTokenBalance={null}
        showMaxButton={null}
        inputValue={null}
        inputOnChangeHandler={null}
        toggleCurrencyModal={null}
        selectedCurrency={null}
      />
      <CurrencyOutput
        inputOnChangeHandler={null}
        inputValue={null}
        selectedCurrency={null}
        toggleCurrencyModal={null}
      />
      <ShortView>
        <ETH>1 ETH = 4,008.2766 USDT</ETH>
        <ImgVarticalShort src={ShortVartical} />
      </ShortView>
      <DIv>
        <Main>
          <Text>Expected Output</Text>
          <Price>1.46 USDT</Price>
        </Main>
        <Main>
          <Text>Price Impact</Text>
          <Price>-0.01%</Price>
        </Main>
        <Main>
          <Text>Minimum Received</Text>
          <Price>1.45 USDT</Price>
        </Main>
        <Main>
          <Text>Gas Price</Text>
          <Price>76.34 - 134.45 GWEI</Price>
        </Main>
        <Main>
          <Text>Slippage Tolerance</Text>
          <Price>1%</Price>
        </Main>
        <Main>
          <Text>Transaction Cost</Text>
          <Price>~$0.02</Price>
        </Main>
      </DIv>
      <OrderBtn>Confirm Swap</OrderBtn>
    </>
  );
};

export default SwapConfirmModal;
