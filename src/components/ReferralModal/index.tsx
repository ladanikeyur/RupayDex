// this file is a RestartModal and Provide a Paragraph 
import { Button, styled } from '@mui/material';
import React from 'react';
import ShereLogo from '../../assets/icon/ShereLogo.png';

const MainDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const ShereImage = styled(Button)({
  backgroundColor: '#f2f2f2',
  paddingLeft: 7,
  paddingRight: 7,
  paddingBottom: 14,
  paddingTop: 14,
  borderRadius: 16,
});
const PreText = styled('p')({
  marginLeft: 5,
  fontFamily: 'inter',
  fontWeight: '500',
  fontSize: 16,
});
const Read = styled('span')({
  color: '#BB36FF',
  marginLeft: 2,
});
const ReferralModal = () => {
  return (
    <MainDiv>
      <ShereImage>
        <img src={ShereLogo} alt="Shere" />
      </ShereImage>
      <PreText>
        Connect wallet to generate referral link.How it works?
        <Read>Read More</Read>
      </PreText>
    </MainDiv>
  );
};

export default ReferralModal;
