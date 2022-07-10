// this file is a WalletDetails file and provide a History
import styled from '@emotion/styled';
import { Button, Menu, Modal } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { connetNetwork, connetWallet } from '../../store/Actions';
import filecopy from '../../assets/icon/filecopy.png';
import History from '../../assets/icon/History.png';
import DisConnect from '../../assets/icon/DisConnect.png';
import DownIconWhite from '../../assets/icon/DownIconWhite.png';
import { useSelector } from 'react-redux';
import UserAssets from './UserAssets';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Cros from '../../assets/icon/Cros.png';
import SwapIcon from '../../assets/icon/SwapIcon.png';
import Time from '../../assets/icon/Time.png';
import Left from '../../assets/icon/Left.png';
import Right from '../../assets/icon/Right.png';
import SwapTransactionHistory from '../SwapTransactionHistory';
import CustomModal from '../Modal';

const Copy = styled('div')({
  paddingLeft: '10px',
  alignItems: 'center',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const DropPrice = styled('span')({
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: '#d4d4d4',
  marginLeft: 10,
});
const FileCopy = styled('img')({
  height: '20px',
  width: '20px',
  paddingRight: '10px',
  cursor: 'pointer',
});
const HistoryDiv = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: 15,
});
const HistoryTitle = styled('span')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: 'black',
  marginLeft: 10,
  marginBottom: 10,
  marginTop: 10,
});
const MainDiv = styled('div')({
  alignItems: 'center',
  display: 'flex',
  cursor: 'pointer',
});
const CoinPrice = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fafafa',
  padding: '0px 20px',
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  borderRadius: 16,
  height: 60,
});
const Into = styled('p')({
  backgroundColor: 'white',
  padding: '10px 20px',
  borderRadius: 16,
  marginLeft: 15,
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  fontWeight: 500,
  fontSize: 14,
  fontFamily: 'Inter',
});
const ImageIconDropDown = styled('img')({
  height: '15px',
  width: '15px',
  marginRight: 5
});
const CustomMenu = styled(Menu)({
  marginTop: '5%',
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const Boxes = styled('div')({
  backgroundColor: 'white',
  borderRadius: 24,
  position: 'absolute',
  width: '60%',
  height: '85%',
  // padding: 25,
  top: '50%',
  left: '50%',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  transform: 'translate(-50%, -50%)',
});
const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
});
const HeaderText = styled('span')({
  fontWeight: 600,
  fontSize: 24,
  fontFamily: 'Inter',
});
const Image = styled('img')({
  height: 18,
  width: 18,
});
const Footer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
});
const Count = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 10,
  paddingRight: 10,
});
const Item = styled('span')({
  fontWeight: 500,
  fontSize: 16,
  fontFamily: 'Intel',
  color: '#b3b3b3',
});
const ImageIcon = styled('img')({
  height: 10,
  width: 8,
  backgroundColor: '#ededed',
  padding: 15,
  borderRadius: 100,
  margin: 3,
});
const Body = styled('div')({
  overflow: 'auto',
  height: '84%',
  paddingLeft: 20,
  paddingRight: 20,
});
const Main = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
const Maindiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const StatusImage = styled('img')({
  height: 52,
  width: 52,
});
const Div = styled('div')({
  marginLeft: 5,
});
const StatusText = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
});
const TextPink = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
  color: '#BB36FF',
});
const TimeText = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: 14,
  color: '#e8e8e8',
});
const TimeImage = styled('img')({
  height: 12,
  width: 12,
  opacity: 0.2,
});
const Name = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 800,
  fontSize: 12,
});

const Status = styled('div')({});
const Share = styled('div')({});
const Eth = styled('div')({});
type DataObject = {
  name: String;
  coin: String;
};

const BoxsModal = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '60%',
  height: '90%',
  borderRadius: 10,
});

const CustomButtonActive = styled(Button)({
  borderRadius: "100px",
  background: 'linear-gradient(45deg, #D1982A 0%, #FFE180 100%)',
  padding: '10px 24px',
  fontSize: '15px',
  fontWeight: '500',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 60,
  alignItems: 'center',
  display: 'flex',
  width: '100%',
});


const ButtonConnect = styled('button')({
  borderRadius: "100px",
  backgroundColor: 'white',
  padding: '10px 24px',
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 30,
  border: 'none',
  alignItems: 'center',
  display: 'flex',
  marginLeft: 5
});

const nullObj = {
  name: '',
  coin: '',
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const WalletDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch: AppDispatch = useDispatch();
  const [anchorElPrice, setAnchorElPrice] = React.useState<null | HTMLElement>(null);
  const CoinDetail: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const openmenuPrice = Boolean(anchorElPrice);
  const [WalletData, setWallet] = React.useState<DataObject>(nullObj);
  const [Check, setCheck] = React.useState<Boolean>(false);
  const [NetworkData, setNetwork] = React.useState<DataObject>(nullObj);
  const handleClickPrice = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPrice(event.currentTarget);
  };
  const handleClosemenuPrice = () => {
    setAnchorElPrice(null);
  };
  const connetWalletData = (coin: any) => {
    dispatch(connetWallet(coin));
  };
  const connetNetworkData = (coin: any) => {
    dispatch(connetNetwork(coin));
  };
  const DisConnectWallet = () => {
    handleClosemenuPrice();
    setCheck(false);
    setWallet(nullObj);
    setNetwork(nullObj);
    connetWalletData(nullObj);
    connetNetworkData(nullObj);
  };
  return (
    <div>
      <CustomButtonActive
        id="demo-positioned-button2"
        aria-controls={openmenuPrice ? 'demo-positioned-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenuPrice ? 'true' : undefined}
        onClick={handleClickPrice}
      >
        <ImageIconDropDown src={CoinDetail.coin} alt="Coin" />
        <Name>{CoinDetail.Subname}</Name>
        <ButtonConnect>
          0x37...0420
        </ButtonConnect>
        <CoinDropIcon src={DownIconWhite} alt="DownArrow" />
      </CustomButtonActive>
      <CustomMenu
        id="demo-positioned-menu2"
        aria-labelledby="demo-positioned-button2"
        anchorEl={anchorElPrice}
        open={openmenuPrice}
        onClose={handleClosemenuPrice}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <DropPrice>Connected with MetaMask</DropPrice>
        <Copy>
          <FileCopy src={filecopy} alt="Copy" />
          <p>0x37...0420</p>
        </Copy>

        <UserAssets
          connetWalletData={(val: any) => {
            connetWalletData(val);
          }}
        />
        <HistoryDiv>
          <MainDiv
            onClick={() => {
              handleOpen();
            }}
          >
            <img src={History} alt="History" />
            <HistoryTitle>History</HistoryTitle>
          </MainDiv>
          <MainDiv
            onClick={() => {
              DisConnectWallet();
            }}
          >
            <img src={DisConnect} alt="Disconnect" />
            <HistoryTitle>{CoinNetwork.name !== '' ? 'Disconnect' : 'Connected'}</HistoryTitle>
          </MainDiv>
        </HistoryDiv>
        <CustomModal
          children={
            <BoxsModal>
              <SwapTransactionHistory
                close={() => {
                  handleClose();
                }}
              />
            </BoxsModal>
          }
          isOpen={open}
          modalTitle="Transaction History"
          close={() => {
            handleClose();
          }}
        />
      </CustomMenu>
    </div>
  );
};

export default WalletDetails;
