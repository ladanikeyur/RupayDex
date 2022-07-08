// this is a Component index file and Provide a Component
// import SwapPage from '../../components/swap';

// export { SwapPage };

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, AppFooter, CurrencyModal, ReferralModal } from '../../components';
import Selectedtoken from '../../components/SelectedToken';
import PairLineChart from '../../components/swap/PairLineChart';
import QuoteTables from '../../components/swap/QuoteTable';
import Swap from '../../components/swap/Swap';
import TransactionSettings from '../../components/swap/Swap/TransactionSettings';

const MainDiv = styled('div')({
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '4%',
});
const Quotadiv = styled('div')({
  marginTop: '15%',
});
const Resetmorediv = styled('div')({
  marginTop: '15%',
});
const SwapPage = () => {
  const Modal: string = useSelector((state: ArticleState) => state.modal);
  return (
    <>
      <AppBar />
      <MainDiv>
        <Grid container spacing={5}>
          {/* <Grid item sm={8}>
            <PairLineChart />
            <Quotadiv>
              <QuoteTables quotes={null} allowedSlippage={null} lastRefresh={null} userSelectedGasPrice={null} />
            </Quotadiv>
          </Grid> */}
          <Grid item sm={4}>
            {Modal === 'Transaction' ? (
              <TransactionSettings isOpen={null} />
            ) : Modal === 'SelectToken' ? (
              <CurrencyModal
                select="PayToken"
                activeList={null}
                currencySearchHandler={null}
                isOpen={null}
                actionHandler={null}
                activeTokenId={null}
              />
            ) : Modal === 'ReceiveToken' ? (
              <Selectedtoken select="ReceiveToken" />
            ) : (
              <Swap btnTitle="Confirm Order" />
            )}
            {/* <Swap btnTitle='Review Order' /> */}
            {/* <Resetmorediv>
              <ReferralModal />
            </Resetmorediv> */}
          </Grid>
        </Grid>
      </MainDiv>
      <AppFooter />
    </>
  );
};

export default SwapPage;
