// this file is a UserAssets and Provide a List 
import styled from '@emotion/styled';
import React from 'react';
import { DropDownDataWallet } from '../../contexts/ConnectWalletDATA';

const NetWorth = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: '10px',
  padding: '5px',
});
const NetWorthTitle = styled('span')({
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '600',
  marginLeft: 10,
});
const H1 = styled('span')({
  fontSize: '24px',
  fontFamily: 'Inter',
  fontWeight: '600',
  marginLeft: 10,
});
const DropMain = styled('div')({
  width: '260px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 15,
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const DIV = styled('div')({
  alignItems: 'center',
  display: 'flex',
  marginTop: 3,
  marginBottom: 3,
});
const ImageIconDropDown = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
});
const DropTitle = styled('span')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: '600',
});
const DropPrice = styled('span')({
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: '#d4d4d4',
  marginLeft: 10,
});

export type UserAssetsProps = {
  connetWalletData: Function;
};

const UserAssets = (props: UserAssetsProps) => {
  return (
    <>
      <NetWorth>
        <NetWorthTitle>Net Worth</NetWorthTitle>
        <br />
        <br />
        <H1>36.34 USDT</H1>
      </NetWorth>
      {DropDownDataWallet.map((val, i) => {
        return (
          <DropMain
            onClick={() => {
              props.connetWalletData(val);
            }}
          >
            <DIV>
              <ImageIconDropDown src={val.coin} alt="Icon"/>
              <DropTitle>{val.Subname}</DropTitle>
            </DIV>
            <DropPrice>{val.Price}</DropPrice>
          </DropMain>
        );
      })}
    </>
  );
};

export default UserAssets;
