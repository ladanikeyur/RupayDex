import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { Component } from 'react'
import Cros from '../../assets/icon/Cros.png';
import Welcome from '../../assets/icon/Welcome.png'
import discord from '../../assets/icon/discord.png';
import social from '../../assets/icon/social.png';
import teligram from '../../assets/icon/teligram.png';
import TwitterBlack from '../../assets/icon/TwitterBlack.png';

const TitleView = styled('div')({
    marginTop: 10,
    position: 'absolute',
    zIndex: 9999,
    left: '95%'
});
const Title = styled('span')({
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '600',
});
const Text = styled('p')({
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '25px',
    fontWeight: '700'
})
const Join = styled('p')({
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '700',
    marginTop:40
})

const Pre = styled('p')({
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '500',
    marginRight: 35,
    marginLeft: 35,
})
const CustomButtom = styled(Button)({
    borderRadius: 100,
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: '20px 0px',
    color: '#000000',
    opacity: '0.65',
  });
  const IconMain = styled('div')({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  });
  
const Img = styled('img')({
    position: 'relative',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height:'300px'
})
export type WalletModalProps = {
    onClose: Function;
};
type ConnectNetworkType = {
    name: String;
    image: String;
};
type DataObject = {
    name: String;
    coin: String;
};
const nullObj = {
    name: '',
    coin: '',
};
const WelcomeModel = (props: WalletModalProps) => {
    return (
        <>
            <TitleView>
                <img
                    src={Cros}
                    onClick={() => {
                        props.onClose();
                    }}
                    alt="Image"
                />
            </TitleView>
            <Img src={Welcome} />
            <Text>Welcome to Rupay DEX</Text>
            <Pre>Hey, I’m Dex - devoted Rupay Dex Assistant! Happy to see you on Rupay Dex! Thanks for your choice! Hope, you will enjoy our Low Fee swaps and great earning opportunities.</Pre>
            <Join>Join the Friendly Rupay DEX family!</Join>
            <IconMain>
                <CustomButtom>
                    <img src={teligram} alt="teligram" />
                </CustomButtom>
                <CustomButtom>
                    <img src={social} alt="social" />
                </CustomButtom>
                <CustomButtom>
                    <img src={TwitterBlack} alt="twiter" />
                </CustomButtom>
                <CustomButtom>
                    <img src={discord} alt="discord" />
                </CustomButtom>
            </IconMain>
        </>
    )
}


export default WelcomeModel
