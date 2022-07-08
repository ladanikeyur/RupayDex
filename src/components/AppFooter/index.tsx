// this file is a AppFooter file and Create a Footer bar 
import styled from '@emotion/styled';
import React, { Component } from 'react';
import discord from '../../assets/icon/discord.png';
import social from '../../assets/icon/social.png';
import teligram from '../../assets/icon/teligram.png';
import twiter from '../../assets/icon/twiter.png';
import { Button } from '@mui/material';
import Logo from '../../assets/logo.png';

const MainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
});
const CustomButtom = styled(Button)({
  borderRadius: 100,
  margin: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
const Main = styled("div")({
  display:'flex',
  alignItems:'center',
});
const NameButton = styled("span")({
  margin: 10,
  marginRight:20,
  backgroundColor: 'transparent',
  padding: '10px 10px',
  color: '#000000',
  opacity: '0.65',
  fontFamily:'Inter',
  fontWeight:400,
  fontSize:16
});
const CustomButtomActive = styled(Button)({
  borderRadius: 100,
  margin: 10,
  background: 'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
  padding: '20px 0px',
  color: '#000000',
});
const AppFooter = () => {
  return (
    <MainComponent>
      <Main>
        <NameButton>
          <img src={Logo} height="34px" width='123px' />
        </NameButton>
        <NameButton>RPX</NameButton>
        <NameButton>Whitepaper</NameButton>
        <NameButton>Documentation</NameButton>
        <NameButton>Github</NameButton>
        <NameButton>Help</NameButton>
      </Main>
      <div>
        <CustomButtom>
          <img src={teligram} alt="teligram" />
        </CustomButtom>
        <CustomButtom>
          <img src={social} alt="social" />
        </CustomButtom>
        <CustomButtomActive>
          <img src={twiter} alt="twiter" />
        </CustomButtomActive>
        <CustomButtom>
          <img src={discord} alt="discord" />
        </CustomButtom>
      </div>
    </MainComponent>
  );
};

export default AppFooter;
