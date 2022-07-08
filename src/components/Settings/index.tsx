// this file Provide Setting menu
import styled from '@emotion/styled';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import setting from '../../assets/icon/setting.png';
import About from '../../assets/icon/About.svg';
import Question from '../../assets/icon/Question.svg';
import request from '../../assets/icon/Request.svg';
import Language from '../../assets/icon/Language.svg';
import Dark from '../../assets/icon/Dark.svg';

const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
});
const CustomMenu = styled(Menu)({
  marginTop: '5%',
});
const CustomMenuItem = styled(MenuItem)({
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: '50px',
  '&:hover': {
    color: '#DC7FB6',
  },
});
const ImageIconDropDown = styled('img')({
  height: '25px',
  width: '25px',
  paddingRight: '20px',
  opacity: 0.6,
});

const SettingButton = styled(Button)({
  borderRadius: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  height: 60,
});
type Setting = {
  name:string
}
type SettingsProps = {
  settings: Setting[];
};
const Settings = (props: SettingsProps) => {
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
      <SettingButton
        id="demo-positioned-button"
        aria-controls={openmenu ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenu ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={setting} alt="Setting" />
      </SettingButton>
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
        <CustomMenuItem>
          <ImageIconDropDown src={About} alt="About" />
          <DropDownTitleIcon>{props.settings[0].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={Question} alt="icon" />
          <DropDownTitleIcon>{props.settings[1].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={request} alt="Request" />
          <DropDownTitleIcon>{props.settings[2].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={Language} alt="icon" />
          <DropDownTitleIcon>{props.settings[3].name}</DropDownTitleIcon>
        </CustomMenuItem>
        <CustomMenuItem>
          <ImageIconDropDown src={Dark} alt="Dark" />
          <DropDownTitleIcon>{props.settings[4].name}</DropDownTitleIcon>
        </CustomMenuItem>
      </CustomMenu>
    </div>
  );
};

export default Settings;
