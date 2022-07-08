// this file is a CurrencySearch Modal and Provide outher Currency suggestion Search time
import styled from '@emotion/styled';
import React, { Component } from 'react';
import coin from '../../assets/icon/coin.png';

const NotResult = styled('div')({
  padding: 30,
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '24px',
  // position:'absolute',
  // width:'52%',
});
const List = styled('span')({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingTop: 5,
  paddingBottom: 5,
  '&:hover': {
    backgroundColor: '#e5e5e5',
  },
});
const TokenHeading = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 14,
  color: '#d7d7d7',
});
const ListTitle = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 14,
  color: 'black',
  marginLeft: 5,
});
const ListSubTitle = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 14,
  color: '#d7d7d7',
  marginLeft: 5,
});

export type CurrencySearchProps = {
    searchValue: string | number | null;
};

const CurrencySearch = (props: CurrencySearchProps) => {
  return (
    <NotResult>
      <TokenHeading>Tokens</TokenHeading>
      <List>
        <img src={coin} alt="Coin" />
        <ListTitle>Ethereum (ETH)</ListTitle>
        <ListSubTitle>Ethereum</ListSubTitle>
      </List>
      <List>
        <img src={coin} alt="coin" />
        <ListTitle>Wrapped Ethereum (WETH)</ListTitle>
        <ListSubTitle>Ethereum</ListSubTitle>
      </List>
      <List>
        <img src={coin} alt="coin" />
        <ListTitle>Ethereum (ETH)</ListTitle>
        <ListSubTitle>Binance Smart Chain</ListSubTitle>
      </List>
      <List>
        <img src={coin} alt="coin" />
        <ListTitle>Ethereum (ETH)</ListTitle>
        <ListSubTitle>Polygon</ListSubTitle>
      </List>
      <hr />
      <TokenHeading>Ethereum Markets</TokenHeading>
      <List>
        <ListTitle>ETH / DAI</ListTitle>
      </List>
      <List>
        <ListTitle>ETH / WETH</ListTitle>
      </List>
      <List>
        <ListTitle>ETH / USDC</ListTitle>
      </List>
    </NotResult>
  );
};

export default CurrencySearch;
