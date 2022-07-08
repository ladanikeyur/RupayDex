import styled from '@emotion/styled';
import React, { Component, useState } from 'react';
import HighSlippageIcon from '../../../../../assets/icon/HighSlippage.png';
import Cros from '../../../../../assets/icon/Cros.png';
import { Button, FormControlLabel, Radio } from '@mui/material';
import { SafetyCheck } from '@mui/icons-material';

const Title = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: 'red',
  textAlign: 'center',
  margin: 'auto',
  display: 'block',
  marginTop: 20,
});
const SubTitle = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '14px',
  textAlign: 'center',
  color: 'black',
  margin: 'auto',
  display: 'block',
  marginTop: 10,
});
const CompletedIcon = styled('img')({
  height: '70px',
  width: '70px',
  margin: 'auto',
  display: 'block',
});
const Buttons = styled(Button)({
  borderRadius: 12,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  textTransform: 'initial',
  display: 'block',
  margin: 'auto',
  opacity: 0.4,
});
const ButtonsActive = styled(Button)({
  borderRadius: 12,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  textTransform: 'initial',
  display: 'block',
  margin: 'auto',
});

const BtnIcon = styled('img')({
  height: '32px',
  width: '32px',
  marginLeft: 3,
  marginRight: 3,
});
const CloseIcon = styled('img')({
  height: '15px',
  width: '15px',
  cursor:'pointer'
});
const ImagDiv = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
const Main = styled('div')({
  marginTop: 10,
});
const TitleControl = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '2%',
});
const ConditionPink = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  color: '#BB36FF',
  marginRight: 5,
  marginLeft: 5,
});
const Condition = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  opacity:0.60
});
export type TransactionFailedProps = {
  handleClose: () => void;
  transactionUrl: string | null;
  watchAssetHandler: any;
};

const HighSlippage = (props: TransactionFailedProps) => {
  const [Check, setCheck] = useState(false);
  return (
    <Main>
      <ImagDiv>
        <CloseIcon src={Cros} onClick={props.handleClose} alt="Icon" />
      </ImagDiv>
      <CompletedIcon src={HighSlippageIcon} alt="Image" />
      <Title>High Slippage Alert</Title>
      <SubTitle>Slippage is higher than normal trades. Swap results can be different than usual.</SubTitle>
      <TitleControl>
        <FormControlLabel
          control={
            <Radio
              onClick={() => {
                setCheck(!Check);
              }}
              checked={Check}
            />
          }
          label=""
        />
        <Condition>
          I accept the <ConditionPink>Terms of Services</ConditionPink>&<ConditionPink>Privacy Policy</ConditionPink>
        </Condition>
      </TitleControl>
      {Check ? <ButtonsActive onClick={props.handleClose}>Close</ButtonsActive> : <Buttons>Close</Buttons>}
    </Main>
  );
};

export default HighSlippage;
