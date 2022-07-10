import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { Component } from 'react'
import Cros from '../../assets/icon/Cros.png';
import ErrorFace from '../../assets/icon/ErrorFace.png'


const TitleView = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginRight:10,
    marginLeft:10
});
const OrderBtn = styled(Button)({
    marginLeft:15,
    width: '94%',
    backgroundColor: '#3B3C4E',
    color: 'white',
    borderRadius: '12px',
    marginTop: '7%',
    textTransform: 'initial',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 700,
    '&:hover': {
        backgroundColor: '#3B3C4E',
    },
});
const Title = styled('span')({
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '600',
});
const Img = styled('img')({
    height: '209px',
    width: '209px',
    margin: 'auto',
    display: 'block'
});
const Error = styled('p')({
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '16px',
    marginTop:'5%',
    lineHeight:'30px'
});

const Text = styled('p')({
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '14px',
    color:'#8B8CA7'
});


type ErrorModelProps = {
    onClose: Function;
};

const ErrorModel = (props: ErrorModelProps) => {
    return (
        <>
            <TitleView>
                <Title>Error</Title>
                <img
                    src={Cros}
                    onClick={() => {
                        props.onClose();
                    }}
                    alt="Image"
                />
            </TitleView>
            <Img src={ErrorFace} />
            <Error>
                Error Message <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> faucibus hendrerit tellus, at pharetra quam interdum at.<br /> Maecenas sed dolor non quam consequat pretium quis nec felis.
            </Error>
            <OrderBtn>
                Try Again
            </OrderBtn>
            <Text>Enter an amount to see more trading details</Text>
        </>
    )
}


export default ErrorModel