// this is a QuoteTable file and Provide a table List and Data
import styled from '@emotion/styled';
import { Button, Grid, List } from '@mui/material';
import React, { useState } from 'react';
import DownArrow from '../../../assets/icon/DownArrow.png';
import shere from '../../../assets/icon/Shere.png';
import short from '../../../assets/icon/short.png';
import ShowMoreIcon from '../../../assets/icon/ShowMore.png';
import HideDetail from '../../../assets/icon/HideDetail.png';
import { data } from '../../../contexts/QuoteTableDATA';
import { type } from 'os';

const QuoteTable = styled('div')({
  borderRadius: 24,
  filter: 'blur(5px)',
});
const CardCustom = styled('div')({
  borderRadius: 24,
});

const FirseDiv = styled('div')({
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  justifyContent: 'space-between',
  paddingLeft: '2%',
  paddingRight: '2%',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
});
const Title = styled('p')({
  color: 'black',
  fontFamily: 'Inter',
});
const ImageSpan = styled('span')({
  color: 'black',
  paddingLeft: 5,
});
const MainSpan = styled('span')({
  color: '#DAA73B',
  fontFamily: 'Inter',
});
const SecondDiv = styled('div')({
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '2%',
  paddingRight: '2%',
  height: 70,
});
const DangerTitle = styled('p')({
  color: '#FF0000',
  fontWeight: '500',
  fontSize: '16px',
  fontFamily: 'Inter',
});
const RefresBtn = styled(Button)({
  backgroundColor: 'white',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  color: 'black',
  borderRadius: 100,
  fontWeight: '500',
  fontSize: '16px',
  paddingLeft: '3%',
  paddingRight: '3%',
  fontFamily: 'Inter',
});
const ListDiv = styled('div')({
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#f0f0f0',
  padding: 10,
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
});
const HeaderDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '7%',
});
const ImageIcon = styled('img')({
  paddingRight: 10,
});
const ShereIcon = styled('img')({
  paddingLeft: 10,
});
const Text = styled('p')({
  textAlign: 'center',
  opacity: 0.4,
  fontSize: '16px',
  fontWeight: '500',
  fontFamily: 'Inter',
});
const TextDown = styled('p')({
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'Inter',
});
const ChangeText = styled('span')({
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '600',
  color: '#DAA73B',
  fontFamily: 'Inter',
});
const ShortImage = styled('img')({
  paddingLeft: 3,
  height: 12,
});
const ShowMore = styled('p')({
  textAlign: 'center',
  color: '#DAA73B',
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'Inter',
  cursor: 'pointer',
});
const DownArrowImg = styled('img')({
  height: 11,
  paddingLeft: 10,
});
const DownArrowImgTop = styled('img')({
  height: 11,
  paddingLeft: 10,
});
const MainTitle = styled('p')({
  fontFamily: 'Inter',
});

type Quotes = {}

type QuoteTableProps = {
    allowedSlippage: number | null;
    lastRefresh: number | null;
    userSelectedGasPrice: number | null;
    quotes: Quotes[] | null;
};
const QuoteTables = (props: QuoteTableProps) => {
  const [loardData, setLoardData] = useState<any>(1);
  const [blur, setBlur] = useState<Boolean>(true);
  return (
    <>
      {blur ? (
        <QuoteTable>
          <FirseDiv>
            <Title>
              Max Price Slippage:{' '}
              <MainSpan>
                1%
                <ImageSpan>
                  <img src={DownArrow} alt="DownArrow" />
                </ImageSpan>
              </MainSpan>
            </Title>
            <Title>
              Gas Price:{' '}
              <MainSpan>
                206 GWEI
                <ImageSpan>
                  <img src={DownArrow} alt="DownArrow" />
                </ImageSpan>
              </MainSpan>
            </Title>
          </FirseDiv>
          <SecondDiv>
            <DangerTitle>Data updated 18m ago. Please refresh:</DangerTitle>
            <RefresBtn>Refresh</RefresBtn>
          </SecondDiv>
          <List aria-label="main mailbox folders">
            {data.map((val, i) => {
              return (
                <>
                  {loardData > i ? (
                    <ListDiv>
                      <HeaderDiv>
                        <ImageIcon src={val.icon} alt="icon" />
                        <p>{val.name}</p>
                        <ShereIcon src={shere} alt="icon" />
                      </HeaderDiv>
                      <Grid container spacing={0}>
                        <Grid item xs={4}>
                          <Text>{val.get}</Text>
                          <TextDown>
                            {val.proce} <ChangeText>{val.pr}</ChangeText>
                          </TextDown>
                        </Grid>
                        <Grid item xs={4}>
                          <Text>
                            {val.shortname} <ShortImage src={short} alt="icon" />
                          </Text>
                          <TextDown>{val.shortPrice}</TextDown>
                        </Grid>
                        <Grid item xs={4}>
                          <Text>{val.gasfee}</Text>
                          <TextDown>{val.gesprice}</TextDown>
                        </Grid>
                      </Grid>
                    </ListDiv>
                  ) : (
                    ''
                  )}
                </>
              );
            })}
          </List>
        </QuoteTable>
      ) : (
        <CardCustom>
          <FirseDiv>
            <Title>
              Max Price Slippage:{' '}
              <MainSpan>
                1%
                <ImageSpan>
                  <img src={DownArrow} alt="DownArrow" />
                </ImageSpan>
              </MainSpan>
            </Title>
            <Title>
              Gas Price:{' '}
              <MainSpan>
                206 GWEI
                <ImageSpan>
                  <img src={DownArrow} alt="DownArrow" />
                </ImageSpan>
              </MainSpan>
            </Title>
          </FirseDiv>
          <SecondDiv>
            <DangerTitle>Data updated 18m ago. Please refresh:</DangerTitle>
            <RefresBtn>Refresh</RefresBtn>
          </SecondDiv>
          <List aria-label="main mailbox folders">
            {data.map((val, i) => {
              return (
                <>
                  {loardData > i ? (
                    <ListDiv>
                      <HeaderDiv>
                        <ImageIcon src={val.icon} alt="icon" />
                        <MainTitle>{val.name}</MainTitle>
                        <ShereIcon src={shere} alt="shere" />
                      </HeaderDiv>
                      <Grid container spacing={0}>
                        <Grid item xs={4}>
                          <Text>{val.get}</Text>
                          <TextDown>
                            {val.proce} <ChangeText>{val.pr}</ChangeText>
                          </TextDown>
                        </Grid>
                        <Grid item xs={4}>
                          <Text>
                            {val.shortname} <ShortImage src={short} alt="Short-Icon" />
                          </Text>
                          <TextDown>{val.shortPrice}</TextDown>
                        </Grid>
                        <Grid item xs={4}>
                          <Text>{val.gasfee}</Text>
                          <TextDown>{val.gesprice}</TextDown>
                        </Grid>
                      </Grid>
                    </ListDiv>
                  ) : (
                    ''
                  )}
                </>
              );
            })}
          </List>
        </CardCustom>
      )}
      {data.length === loardData || data.length + 1 === loardData ? (
        <ShowMore
          onClick={() => {
            setLoardData(1);
            setBlur(true);
          }}
        >
          Hide Details
          <DownArrowImgTop src={HideDetail} alt="Hide" />
        </ShowMore>
      ) : (
        <ShowMore
          onClick={() => {
            setLoardData(data.length > loardData ? loardData + 2 : loardData);
            setBlur(false);
          }}
        >
          Show More Details
          <DownArrowImg src={ShowMoreIcon} alt="Show" />
        </ShowMore>
      )}
    </>
  );
};

export default QuoteTables;
