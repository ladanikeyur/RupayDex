// this is a SwapTransactionDetails file and Provide a SwapTransactionDetails list
import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailView = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '80%',
  margin: 'auto',
  display: 'block',
  padding: 10,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
});
const Expected = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});
const ItemText = styled('div')({
  padding: 10,
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '500',
  color: '#000000',
});

export type SwapTransactionDetailsProps = {
  btnTitle: String;
  expectedOutput: number | null;
  priceImpact: number | null;
  minReceived: number | null;
  maxSent: number | null;
  allowedSlippage: number | null;
};

type ConnectWalletType = {
  name: String | string;
  image: String | string;
  Subname: String | string;
  Price: String | string;
};
type CoinNetworkType = {
  name: String | string;
  image: String | string;
};
const SwapTransactionDetails = (props: SwapTransactionDetailsProps) => {
  const ConnectWallet: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: CoinNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);

  return props.btnTitle === 'Connect Wallet' ? (
    ConnectWallet.name !== '' && CoinNetwork.name !== '' ? (
      <DetailView>
        <Expected>
          <ItemText>Expected Output</ItemText>
          <ItemText>1.46 USDT</ItemText>
        </Expected>
        <Expected>
          <ItemText>Price Impact</ItemText>
          <ItemText>-0.01%</ItemText>
        </Expected>
        <hr />
        <Expected>
          <ItemText>Minimum received after slippage (0.50%)</ItemText>
          <ItemText>1.46 USDT</ItemText>
        </Expected>
      </DetailView>
    ) : null
  ) : null;
};

export default SwapTransactionDetails;
