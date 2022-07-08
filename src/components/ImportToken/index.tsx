// this file is a ImportToken file and Provide a Token id
import styled from '@emotion/styled';
import { Button, FormControlLabel, Radio } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Cros from '../../assets/icon/Cros.png';
import coin from '../../assets/icon/coin6.png';
import info from '../../assets/icon/info.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'white',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 6,
  paddingTop: 0,
  height: '80%',
  borderRadius: 2,
  overFlow: 'auto',
};
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Title = styled('p')({
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: 600,
});
const UserId = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '5%',
  marginBottom: '4%',
});
const TokenImg = styled('img')({
  height: 36,
  width: 36,
  marginRight: 10,
});
const TokenName = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
});
const TokenCode = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
  color: '#dbdbdb',
});
const TokenCodeKey = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
  color: '#dbdbdb',
});
const Warning = styled('div')({
  backgroundColor: '#f0f0f0',
  padding: 20,
  borderRadius: 20,
  marginTop: '10%',
  marginBottom: 15,
  paddingTop: 30,
  paddingBottom: 30,
});
const Info = styled('img')({
  height: 25,
  width: 25,
  marginRight: 10,
});
const WarningText = styled('span')({
  fontFamily: 'Inter',
  fontSize: 18,
  fontWeight: 900,
  color: 'red',
});
const Red = styled('div')({
  alignItems: 'center',
  display: 'flex',
  marginBottom: 15,
});
const Pre = styled('span')({
  fontFamily: 'Inter',
  fontSize: 14,
  fontWeight: 500,
  color: 'black',
  lineHeight: 1.5,
});
const Parmition = styled('span')({
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 900,
  color: 'black',
});
const ParmitionDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 10,
  marginBottom: 20,
});
const ConnectButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'initial',
});
const ConnectButtonDisabal = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'initial',
  opacity: 0.3,
});

type Token = {};

export type ImportTokenProps = {
  handleClose: Function;
  importedToken: Token[] | null;
};

const ImportToken = (props: ImportTokenProps) => {
  const [Check, setCheck] = React.useState<Boolean>(false);
  return (
    <Box sx={style}>
      <TitleView>
        <Title>Import a Token</Title>
        <img
          src={Cros}
          onClick={() => {
            props.handleClose();
          }}
          alt="image"
        />
      </TitleView>
      <UserId>
        <TokenImg src={coin} alt="coin" />
        <TokenName>
          Tether <TokenCode>(USDT)</TokenCode>
        </TokenName>
      </UserId>
      <TokenCodeKey>0x1ce0c2827e2ef14d5c4f29a091d735a204794041</TokenCodeKey>
      <Warning>
        <Red>
          <Info src={info} />
          <WarningText>Trade at your own risk!</WarningText>
        </Red>
        <Pre>
          &nbsp;&nbsp;&nbsp;Anyone can create a token, including creating fake versions of existing tokens that claim to
          represent proects.
        </Pre>
        <br />
        <br />
        <Pre>&nbsp;&nbsp;&nbsp;If you purchase this token, you may not be able to sell it back.</Pre>
      </Warning>
      <ParmitionDiv>
        <FormControlLabel
          control={
            <Radio
              onClick={(e: any) => {
                setCheck(!Check);
              }}
              checked={Check ? true : false}
            />
          }
          label=""
        />
        <Parmition>I understand and want to proceed.</Parmition>
      </ParmitionDiv>
      {Check ? (
        <ConnectButton variant="text" onClick={() => {}}>
          Import Token
        </ConnectButton>
      ) : (
        <ConnectButtonDisabal variant="text">Import Token</ConnectButtonDisabal>
      )}
    </Box>
  );
};

export default ImportToken;
