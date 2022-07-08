// this is a SwapHeader file and Provide a SwapHeader
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onModalOpen } from '../../../../store/Actions';
import menu from '../../../../assets/icon/Setting.svg';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});

const Swap = styled('span')({
  fontSize: '24px',
  fontWeight: '600',
  color: 'black',
  fontFamily: 'Inter',
});
const SettingBtn = styled('button')({
  backgroundColor:'#3B3C4E',
  padding:7,
  borderRadius:12
});

export type SwapHeaderProps = {
  transactionSettingHandler: any;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const SwapHeader = (props: SwapHeaderProps) => {
  const dispatch: AppDispatch = useDispatch();
  const onModal = (article: any) => {
    dispatch(onModalOpen(article));
  };
  return (
    <SwapDiv>
      <Swap>Swap</Swap>
      <SettingBtn>
      {/* onClick={() => {
            onModal('Transaction');
          }} */}
        <img
          src={menu}
          alt="Menu"
        />
      </SettingBtn>

    </SwapDiv>
  );
};

export default SwapHeader;
