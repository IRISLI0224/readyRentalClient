import React from 'react';
import styled from 'styled-components';
import Slider from '../SliderV2';
import StyledIcon from '../../hoc/IconV2';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar, AiOutlineStar } from 'react-icons/ai';

const PropertyList = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
  display: flex;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #e6e9ec;
  margin-bottom: 30px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-left: 30px;
  &:hover {
    box-shadow: rgba(34, 34, 34, 0.5) 0px 8px 8px 0px;
  }
`;

const Thumb = styled.div`
  border-radius: 3px 0 0 3px;
  position: relative;
  width: 400px;
  background-color: #0d263b;
  overflow: hidden;
  @media(max-width: 991px) {
      width: 100%;
      max-height: fit-content;
  };
  @media (max-width: 768px) {
      height: auto;
`;

const Details = styled.div`
  width: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    width: auto;
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
  text-transform: uppercase;
  margin: 5px;
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
`;

const Button = styled.button`
  background-color: rgba(0, 97, 223, 0.1);
  border: none;
  border-radius: 3px;
  color: #0061df;
  font-size: 14px;
  font-weight: 600;
  height: 50px;
  text-transform: uppercase;
  width: 126px;
  cursor: pointer;
`;

const ContentFooter = styled.div`
  padding: 6px 20px 10px;
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
  margin-bottom: 5px;
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
  <>
    <PropertyList>
      <Thumb>
        <Slider width='100%' slides={props.slides} />
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
            <CallNow>Call: 202-555-0191</CallNow>
            <Button>Details</Button>
          </WrapperCenter>
        </ContentDetail>
        <ContentFooter>
          <Type>{props.types}</Type>
          <StyledIcon>
            {' '}
            <AiOutlineStar />{' '}
          </StyledIcon>
        </ContentFooter>
      </Details>
    </PropertyList>
  </>
);

export default Cards;
