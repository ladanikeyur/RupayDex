import React, { Component, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, FormControl, Menu, Modal, NativeSelect, Tab, Tabs } from '@mui/material';
import Cros from '../../assets/icon/Cros.png';
import SwapIcon from '../../assets/icon/SwapIcon.png';
import Time from '../../assets/icon/Time.png';
import Left from '../../assets/icon/Left.png';
import Right from '../../assets/icon/Right.png';
import LeftIcon from '../../assets/icon/LeftIcon.png';
import coin from '../../assets/icon/coin.png';
import coin3 from '../../assets/icon/coin3.png';
import Pending from '../../assets/icon/Pending.png';
import Faild from '../../assets/icon/Faild.png';
import Approve from '../../assets/icon/Approve.png';

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
  height: '30px',
  width: '30px',
  paddingRight: '20px',
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
  fontSize: 20,
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
  marginRight: 10,
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
  height: '80%',
  paddingLeft: 20,
  paddingRight: 20,
});
const Main = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '7px',
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
  marginLeft: 5,
});
const TimeImage = styled('img')({
  height: 12,
  width: 12,
  opacity: 0.2,
});
const Name = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 800,
  fontSize: 14,
});
const Span = styled('span')({
  fontFamily: 'Inter',
  fontWaight: 600,
  fontSize: '16px',
  color: 'black',
  opacity: 0.65,
  alignItems: 'center',
  display: 'flex',
});
const Img = styled('img')({
  opacity: 0.65,
  marginRight: 5,
  marginLeft: 5,
});
const CoinImg = styled('img')({
  marginRight: 5,
});
const Status = styled('div')({});
const Share = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const Eth = styled('div')({});

const CurrencySwitch = styled('div')({
  fontFamily: 'Inter',
  fontSize: 'calc(0.75em + 1vw)',
  display: 'flex',
});
const TextSpan = styled('span')({
  fontFamily: 'Inter',
  fontSize: 'calc(0.75em + 1vw)',
  opacity: '0.3',
  paddingLeft: 5,
});
const ShortIcon = styled('img')({
  height: '25px',
  width: '25px',
  marginLeft: '20px',
  marginRight: '20px',
});
const CurrencyPriceUSD = styled('span')({
  fontFamily: 'Inter',
  fontSize: '44px',
  fontWeight: '600',
});
const CurrencyPriceChange = styled('span')({
  color: '#DC7FB6',
  fontSize: '16px',
  fontWeight: '600',
  marginLeft: '1.5%',
  fontFamily: 'Inter',
});
const View = styled('div')({});
const PairData = styled('div')({
  width: '100%',
});
const CustomButton = styled('button')({
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '600',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 25,
  marginRight: 5,
  fontFamily: 'Inter',
  borderWidth: 0,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 5,
  marginBottom: 5,
});
const CustomButtonActive = styled('button')({
  borderRadius: '50px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: 'white!important',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 25,
  marginRight: 5,
  fontFamily: 'Inter',
  borderWidth: 0,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 5,
  marginBottom: 5,
});
type PaginationTableProps = {
  data : any
}
const PaginationTable = (props:PaginationTableProps) => {
  const [page, setPage] = React.useState<any>([]);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [count, setCount] = React.useState('10');
  const a = parseInt(count);
  useEffect(() => {
    const range = [];
    const num = Math.ceil(props.data.length / a);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    setPage(range);
  }, [count, start, end]);

  const NextPage = () => {
    if (page.length > currentPage) {
      setStart(a * currentPage);
      setCurrentPage(currentPage + 1);
      setEnd(end + a);
    }
  };

  const PriviousPage = () => {
    if (currentPage > 1) {
      setStart(start - a);
      setEnd(end - a);
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Body>
        {props.data.map((val:any, i:any) => {
          return start <= i && i + 1 <= a * currentPage ? (
            <>
              <Span>{val.Date}</Span>
              {val.Transaction.map((data:any, ind:any) => {
                return (
                  <Main>
                    <Status>
                      <Maindiv>
                        {data.Status === 'Swap' ? (
                          <StatusImage src={SwapIcon} />
                        ) : data.Status === 'Pending' ? (
                          <StatusImage src={Pending} />
                        ) : data.Status === 'Approve' ? (
                          <StatusImage src={Approve} />
                        ) : data.Status === 'Failed' ? (
                          <StatusImage src={Faild} />
                        ) : null}

                        <Div>
                          <StatusText>{data.Name}</StatusText>
                          <br />
                          <TextPink>
                            {data.Id}
                            <TimeText>
                              <TimeImage src={Time} /> {data.Time}
                            </TimeText>
                          </TextPink>
                        </Div>
                      </Maindiv>
                    </Status>
                    <Share>
                      <Span>
                        <CoinImg src={data.PayImg} />
                        {data.PayToken}
                      </Span>
                      {data.ReceiveImg !== '' && data.ReceiveToken !== '' ? (
                        <>
                          <Img src={LeftIcon} height={15} width={16} />
                          <Span>
                            <CoinImg src={data.ReceiveImg} />
                            {data.ReceiveToken}
                          </Span>
                        </>
                      ) : null}
                    </Share>
                    <Eth>
                      <Span>{data.ETH}</Span>
                    </Eth>
                  </Main>
                );
              })}
            </>
          ) : null;
        })}
        ;
      </Body>
      <Footer>
        <Count>
          <Item>Items Per Page</Item>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <NativeSelect
                onChange={(e: any) => {
                  setCount(e.target.value);
                }}
                value={count}
                inputProps={{
                  name: 'Page',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Count>
        <Count>
          <Item>
            {currentPage}-{count} of {page.length}
          </Item>
          <ImageIcon
            src={Left}
            onClick={() => {
              PriviousPage();
            }}
          />
          <ImageIcon
            src={Right}
            onClick={() => {
              NextPage();
            }}
          />
        </Count>
      </Footer>
    </>
  );
};

export default PaginationTable;
