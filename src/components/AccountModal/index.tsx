import styled from '@emotion/styled';
import React, { Component } from 'react'
import Cros from '../../assets/icon/Cros.png';
import filecopy from '../../assets/icon/filecopy.png';
import Shere from '../../assets/icon/Shere.png';
import WalletSwitch from '../../assets/icon/WalletSwitch.png';


const TitleView = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10
});

const Title = styled('span')({
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '600',
});

const AccountDetail = styled('div')({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:10,
    marginRight:10,
    marginTop:'5%'
});
const Token = styled('p')({
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '700',
    color:'#262626'
});
const Transactions = styled('p')({
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600',
    color:'#262626'
});
const Clear = styled('p')({
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '700',
    color:'#D1982A'
});
const Btn = styled('button')({
    padding:0,
    border:'none',
    backgroundColor:'transparent',
    marginLeft:5
});
const Img = styled('img')({
   height:40,
   width:40
});
const ImgButton = styled('img')({
    height:20,
    width:20,
    marginRight:7
 });

const Buttons = styled('button')({
    borderRadius:7,
    border:'none',
    fontFamily:'Inter',
    fontWeight:'700',
    fontSize:'14px',
    color:'white',
    backgroundColor:'#3B3C4E',
    display:'flex',
    alignItems:'center',
    padding:7,
    paddingLeft:50,
    paddingRight:50
 });
 const Disconnect = styled('button')({
    borderRadius:7,
    border:'none',
    fontFamily:'Inter',
    fontWeight:'700',
    fontSize:'14px',
    color:'white',
    background:'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
    display:'flex',
    alignItems:'center',
    padding:7,
    paddingLeft:50,
    paddingRight:50
 });
 
type AccountModalProps = {
    onClose: Function;
};

const AccountModal = (props: AccountModalProps) => {
    return (
        <>
            <TitleView>
                <Title>Account</Title>
                <img
                    src={Cros}
                    onClick={() => {
                        props.onClose();
                    }}
                    alt="Image"
                />
            </TitleView>
            <AccountDetail>
                <Token>0xBAD7...E116</Token>
                <div>
                    <Btn><Img src={Shere}/></Btn>
                    <Btn><Img src={filecopy}/></Btn>
                </div>
            </AccountDetail>
            <AccountDetail>
                <Buttons><ImgButton src={WalletSwitch}/>WalletSwitch</Buttons>
                <Disconnect>Disconnect Wallet</Disconnect>
            </AccountDetail>
            <AccountDetail>
                <Transactions>Recent Transactions</Transactions>
                <Clear>Clear All</Clear>
            </AccountDetail>
        </>
    )
}

export default AccountModal
