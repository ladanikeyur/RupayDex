// this is a TransactionSettings file and Provide a TransactionSettings modal
import styled from '@emotion/styled';
import { Button, FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import close from '../../../../assets/icon/Cros.png';
import Question from '../../../../assets/icon/Question.svg';
import DownArrow from '../../../../assets/icon/DownArrow.png';
import TopArrow from '../../../../assets/icon/TopArrow.png';
import { useDispatch } from 'react-redux';
import { onModalOpen } from '../../../../store/Actions';
import { Switch } from '@mui/material';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const MainDiv = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
  paddingBottom: '10%',
});
const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
});
const Swap = styled('p')({
  fontSize: '24px',
  fontWeight: '600',
  color: 'black',
  fontFamily: 'Inter',
});
const Slippage = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 20,
});
const SlippageText = styled('p')({
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  fontFamily: 'Inter',
});
const QuestionIcon = styled('img')({
  height: 20,
  width: 20,
  marginLeft: 5,
  marginBottom: 5,
});
const FlexView = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const CustomButtonActive = styled(Button)({
  borderRadius: '16px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '10px 24px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'lowercase',
  marginLeft: 15,
  marginRight: 5,
  height: '52px',
  width: '47%',
});
const CustomButtonDisebal = styled(Button)({
  borderRadius: '16px',
  background: 'Transaction',
  padding: '10px 24px',
  fontSize: '14px',
  fontWeight: '600',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'lowercase',
  marginLeft: 15,
  marginRight: 5,
  height: '52px',
  width: '47%',
  borderWidth:1,
  borderColor:'black',
  borderStyle:'solid'
});
const CustomButtonActiveNumber = styled(Button)({
  borderRadius: '16px',
  background: '#f7f7f7',
  padding: '10px 24px',
  color: '#b3b3b3',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginRight: 15,
  height: '52px',
  width: '47%',
  fontSize: 24,
  fontFamily: 'Inter',
  fontWeight: 500,
});
const MainInput = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingRight: 10,
  marginLeft: 15,
  marginRight: 15,
  borderRadius: '16px',
});
const TextInput = styled('input')({
  width: '100%',
  height: '52px',
  padding: 7,
  backgroundColor: 'transparent',
  borderBottom: 0,
  border: 'none',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const FlexViewJustyfy = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const PriseText = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  marginLeft: 15,
});
const TimeText = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '14px',
  color: '#cccccc',
  marginRight: 15,
  display: 'flex',
  alignItems: 'center',
});
const TimeTextPink = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '14px',
  color: '#BB36FF',
  marginRight: 15,
  display: 'flex',
  alignItems: 'center',
});

const DownArrowIcon = styled('img')({
  height: '7.78px',
  width: '12.73px',
  marginLeft: 10,
  marginRight: 10,
  cursor:'pointer'
});
const Settings = styled('p')({
  fontWeight: '600',
  fontSize: '16px',
  fontFamily: 'Inter',
  marginLeft: 15,
});
const FlexVIew = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const FlexRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 15,
});
const AutoRout = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  color: '#b3b3b3',
  marginBottom: 5,
});
const MainRow = styled('div')({});
const MainDivs = styled('div')({
  margin: 10,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});
const DivForms = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '40%',
  justifyContent: 'space-between',
});
const DivFormsCustom = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '70%',
  justifyContent: 'space-between',
});
const Comper = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '14px',
  color: '#b3b3b3',
});
const GWEI = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '14px',
  color: '#b3b3b3',
});
const Span = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '14px',
  color: '#b3b3b3',
});

const TextTypeinput = styled('input')({
  backgroundColor: '#f7f7f7',
  border: 'none',
  borderRadius: '22px',
  height: '36px',
  width: '100%',
  outline: 'none',
  padding: 3,
  paddingLeft: 15,
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});

const CloseImage = styled('img')({
  cursor:'pointer'
});

export type TransactionSettingsProps = {
  isOpen: boolean | null;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const TransactionSettings = (props: TransactionSettingsProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [Slider, setSlider] = React.useState<Boolean>(false);
  const onModal = (article: any) => {
    dispatch(onModalOpen(article));
  };
  return (
    <MainDiv>
      <SwapDiv>
        <Swap>Transaction Settings</Swap>
        <CloseImage
          src={close}
          onClick={() => {
            onModal('Swap');
          }}
          alt="Close"
        />
      </SwapDiv>
      <Slippage>
        <SlippageText>Slippage Tolerance</SlippageText>
        <QuestionIcon src={Question} alt="QuestionIcon" />
      </Slippage>
      <FlexView>
        <CustomButtonDisebal>Auto</CustomButtonDisebal>
        <CustomButtonActiveNumber>0.50 %</CustomButtonActiveNumber>
      </FlexView>
      <Slippage>
        <SlippageText>Transaction Deadline</SlippageText>
        <QuestionIcon src={Question} alt="QuestionIcon" />
      </Slippage>
      <MainInput>
        <FlexView>
          <TextInput />
          <Span>Minutes</Span>
        </FlexView>
      </MainInput>
      <hr />
      <FlexViewJustyfy>
        <PriseText>Gas Price</PriseText>
        {Slider === false ? (
          <TimeText>
            <Span>Instant (102.73 - 140.28 GWEI)</Span>
            <DownArrowIcon
              src={DownArrow}
              onClick={() => {
                setSlider(!Slider);
              }}
              alt="DownArrow"
            />
          </TimeText>
        ) : (
          <TimeTextPink>
            Instant (102.73 - 140.28 GWEI)
            <DownArrowIcon
              onClick={() => {
                setSlider(!Slider);
              }}
              src={TopArrow}
              alt="TopArrow"
            />
          </TimeTextPink>
        )}
      </FlexViewJustyfy>
      {Slider ? (
        <>
          <MainDivs>
            <DivForms>
              <FormControlLabel value="Instant" control={<Radio />} label="Instant" />
              <Comper>{'<10Sec'}</Comper>
            </DivForms>
            <GWEI>102.73 - 140.28 GWEI</GWEI>
          </MainDivs>
          <MainDivs>
            <DivForms>
              <FormControlLabel value="High" control={<Radio />} label="High" />
              <Comper>{'~12Sec'}</Comper>
            </DivForms>
            <GWEI>106.73 - 179.28 GWEI</GWEI>
          </MainDivs>
          <MainDivs>
            <DivForms>
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
              <Comper>{'≥1Min'}</Comper>
            </DivForms>
            <GWEI>108.73 - 130.28 GWEI</GWEI>
          </MainDivs>
          <MainDivs>
            <DivFormsCustom>
              <FormControlLabel value="Custom" control={<Radio />} label="Custom" />
              <TextTypeinput defaultValue={10} />
            </DivFormsCustom>
            <GWEI>GWEI</GWEI>
          </MainDivs>
        </>
      ) : (
        ''
      )}
      <Settings>Interface Settings</Settings>
      <FlexRow>
        <MainRow>
          <FlexVIew>
            <AutoRout>Auto Router API</AutoRout>
            <QuestionIcon src={Question} alt="Icon" />
          </FlexVIew>
          <Switch defaultChecked={true} color="secondary" />
        </MainRow>
        <MainRow>
          <FlexVIew>
            <AutoRout>Auto Router API</AutoRout>
            <QuestionIcon src={Question} alt="Icon" />
          </FlexVIew>
          <Switch color="secondary" />
        </MainRow>
      </FlexRow>
      <FlexRow>
        <MainRow>
          <FlexVIew>
            <AutoRout>Auto Router API</AutoRout>
            <QuestionIcon src={Question} alt="Icon" />
          </FlexVIew>
          <Switch defaultChecked={true} color="secondary" />
        </MainRow>
      </FlexRow>
    </MainDiv>
  );
};

export default TransactionSettings;
