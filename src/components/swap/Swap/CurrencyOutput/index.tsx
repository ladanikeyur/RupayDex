// this is a CurrencyOutput file and Provide a Currency Output value and input Design
import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onModalOpen } from '../../../../store/Actions';
import DownArrow from '../../../../assets/icon/DownArrow.png';
import SwapArrow from '../SwapArrow';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const ReceiveMain = styled('div')({
  backgroundColor: 'white',
  marginTop: '10%',
  position: 'relative',
  paddingBottom: '3%',
  paddingTop: '10px',
});
const YouReceive = styled('span')({
  padding: 20,
  fontFamily: 'inter',
  fontWeight: '400',
  fontSize: 14,
});
const MainViewInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 70,
  marginTop: 10,
});
const TextInput = styled('input')({
  width: '90%',
  borderBottom: 'none',
  border: 'none',
  height: '52px',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const SelectMainDarkCoin = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
});
const CoinImgTag = styled('img')({
  height: '12px',
  width: '12px',
});
const CoinTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '14px',
  color: 'black',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});

const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

type ReceiveCoin = {
  name: string | String;
  image: string | String | any;
  fullName: string | String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
export type CurrencyOutputProps = {
  inputOnChangeHandler: any;
  inputValue: number | null;
  selectedCurrency: string | number | null;
  toggleCurrencyModal: any;
};
const CurrencyOutput = (props: CurrencyOutputProps) => {
  const dispatch: AppDispatch = useDispatch();
  const ReceiveCoin: ReceiveCoin = useSelector((state: ArticleState) => state.receiveCoinDetail);

  const onModal = (article: any) => {
    dispatch(onModalOpen(article));
  };
  return (
    <ReceiveMain>
      <SwapArrow switchCurrencyHandler={null} />
      <SwapDiv>
        <YouReceive>Receive (Estimated)</YouReceive>
        <YouReceive>Available: 1,200</YouReceive>
      </SwapDiv>
      <MainViewInput>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectMainDarkCoin>
            {/* onClick={() => {
              onModal('ReceiveToken');
            }} */}
            <CoinImgTag src={ReceiveCoin.image} alt="Icon" />
            <CoinTitle>{ReceiveCoin.name}</CoinTitle>
            <CoinDropIcon src={DownArrow} alt="DownArrow" />
          </SelectMainDarkCoin>
        </FormControl>
        <TextInput placeholder="0" />
      </MainViewInput>
    </ReceiveMain>
  );
};

export default CurrencyOutput;
