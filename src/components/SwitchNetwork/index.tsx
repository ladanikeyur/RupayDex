// this is a SwitchNetwork File and Switch Network
import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import DownIconWhite from '../../assets/icon/DownIconWhite.png';
import { DropDownData } from '../../contexts/ConnectWalletDATA';

const CustomButtonActiveCoin = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '0px 15px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
});
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
});
const TitleIcon = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
});
const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '500',
});

const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CustomMenu = styled(Menu)({
  marginTop: '5%',
});
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 3,
  paddingBottom: 3,
  paddingRight: '30px',
});
const ImageIconDropDown = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
});

export type SwitchNetworkProps = {
  connetNetworkData: Function;
};

const SwitchNetwork = (props: SwitchNetworkProps) => {
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <CustomButtonActiveCoin
        id="demo-positioned-button"
        aria-controls={openmenu ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenu ? 'true' : undefined}
        onClick={handleClick}
      >
        <ImageIcon src={CoinNetwork.coin} alt="Icon" />
        <TitleIcon>{CoinNetwork.name}</TitleIcon>
        <CoinDropIcon src={DownIconWhite} alt="Download" />
      </CustomButtonActiveCoin>
      <CustomMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClosemenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {DropDownData.map((val, i) => {
          return (
            <CustomMenuItem
              onClick={() => {
                props.connetNetworkData(val);
              }}
            >
              <ImageIconDropDown src={val.coin} alt="Icon" />
              <DropDownTitleIcon>{val.name}</DropDownTitleIcon>
            </CustomMenuItem>
          );
        })}
      </CustomMenu>
    </div>
  );
};

export default SwitchNetwork;
