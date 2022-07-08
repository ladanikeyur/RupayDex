import React from 'react';
import { styled } from '@material-ui/core';
import { Button } from '@mui/material';
import Cros from '../../assets/icon/Cros.png';
import Search from '../../assets/icon/Search.png';
import logoimg from '../../assets/icon/coin3.png';
import { useDispatch } from 'react-redux';
import { onModalOpen } from '../../store/Actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const MainDiv = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
  height: '50%',
  overflow: 'auto',
});
const Token = styled('p')({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
});
const Flex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 10,
});
const CrosIcon = styled(Button)({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'Inter',
});
const InputIcon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F7F7F7',
  borderRadius: '16px',
  paddingLeft: '4%',
  marginLeft: 10,
  marginRight: 10,
});

const TextInputActive = styled('input')({
  marginLeft: 10,
  width: '100%',
  border: 'none',
  height: 52,
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});

const IconImg = styled('img')({
  opacity: 0.5,
});
const List = styled('div')({
  width: '92%',
  height: '30px',
  padding: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '1%',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const ListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const TextItem = styled('p')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: 600,
  color: '#000000',
  opacity: 0.65,
  marginRight: 10,
});
const TitleItem = styled('p')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: 600,
  color: '#000000',
  opacity: 0.65,
});
const TitleItemBlack = styled('p')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: 600,
  color: '#000000',
  marginLeft: 10,
});
const Images = styled('img')({});

export type SelectedtokenProps = {
  select:string
}

type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const Selectedtoken = (props:SelectedtokenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const onModal = (modal: any) => {
    dispatch(onModalOpen(modal));
  };
  return (
    <MainDiv>
      <Flex>
        <Token>Select a Token</Token>
        <CrosIcon
          onClick={() => {
            onModal('Swap');
          }}
        >
          <img src={Cros} alt="Cros_icon"/>
        </CrosIcon>
      </Flex>
      <InputIcon>
        <IconImg src={Search} srcSet={Search} alt="img" loading="lazy" />
        <TextInputActive placeholder="Search by Name or Paste Address" />
      </InputIcon>
      <List>
        <ListItem>
          <Images src={logoimg} alt="Logo"/>
          <TitleItemBlack>Tether</TitleItemBlack>
          <TitleItem>(USDT)</TitleItem>
        </ListItem>
        <TextItem>0</TextItem>
      </List>
    </MainDiv>
  );
};

export default Selectedtoken;
