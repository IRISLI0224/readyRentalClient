import React from 'react';
import styled from 'styled-components';
import Slider from '../SliderV2';
import StyledIcon from '../../hoc/IconV2';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
//TODO: do not use float
//TODO: folder names always = compoment name
const CustomButton = styled(Button)({
  marginTop: '30px',
});

const Thumb = styled.div`
  border-radius: 3px 0 0 3px;
  position: relative;
  width: 400px;
  background-color: #0d263b;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 100%;
    max-height: fit-content;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Details = styled.div`
  width: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    width: 90%;
  }
`;

const ContentDetail = styled.div`
  flex: 75%;
  padding: 25px 20px 15px;
  position: relative;
  text-align: left;
  @media screen and (max-width: 991px) {
    padding: 20px;
    flex-direction: column;
    text-align: left !important;
  }
  @media screen and (max-width: 520px) {
    padding: 20px;
  }
`;
const WrapperFloat = styled.div`
  float: left !important;
  text-transform: capitalize;
`;
const WrapperCenter = styled.div`
  text-align: center;
  float: right !important;
  @media screen and (max-width: 991px) {
    margin: 15px 0;
    float: none !important;
    text-align: left !important;
  }
`;

const CallNow = styled.div`
  color: #0d263b;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.8;
  margin-top: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`;

const ContentFooter = styled.div`
  padding: 10px 20px 10px;
  border-top: 1px solid #e6e9ec;
  flex: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 767px) {
    padding: 0 20px 20px;
  } ;
`;

const Price = styled.h2`
  color: #0d263b;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  margin: 5px;
`;

const Type = styled.h4`
  font-size: 16px;
  color: #0d263b;
  font-weight: 600;
  line-height: 28px;
  margin: 5px 0;
  cursor: pointer;
`;

const PropDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 0px !important;
  display: flex;
  flex-direction: row;
`;
const PropDetail = styled.li`
  margin-right: 25px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

const Address = styled.p`
  color: #696969;
  font-weight: 400;
  margin-bottom: 17px;
`;

const Cards = (props) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      bgcolor: 'background.paper',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: 2,
      fontWeight: 'bold',
      mb: 2,
      ml: 2,
    }}
  >
    <Thumb>
      <Slider width="100%" slides={props.slides} />
    </Thumb>
    <Details>
      <ContentDetail>
        <WrapperFloat>
          <Price>${props.price} per week</Price>
          <Address>{props.address}</Address>
          <PropDetails>
            <PropDetail>
              <StyledIcon>
                <BiBed />
              </StyledIcon>
              <StyledText>{props.bed} Beds</StyledText>
            </PropDetail>
            <PropDetail>
              <StyledIcon>
                <BiBath />
              </StyledIcon>
              <StyledText>{props.bath} Bath</StyledText>
            </PropDetail>
            <PropDetail>
              <StyledIcon>
                <AiOutlineCar />
              </StyledIcon>
              <StyledText>{props.car} Garage</StyledText>
            </PropDetail>
          </PropDetails>
        </WrapperFloat>
        <WrapperCenter>
          <CallNow>Call: Ready Rental</CallNow>
          <CustomButton variant="contained">Details</CustomButton>
        </WrapperCenter>
      </ContentDetail>
      <ContentFooter>
        <Type>{props.types}</Type>
      </ContentFooter>
    </Details>
  </Box>
);

Cards.propTypes = {
  price: PropTypes.number,
  address: PropTypes.string,
  bed: PropTypes.number,
  bath: PropTypes.number,
  car: PropTypes.number,
  types: PropTypes.string,
  slides: PropTypes.array,
};
export default Cards;
