import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Slider from '../Slider';
import { SliderData } from './SliderData';
import FlexWrap from '../../hoc/FlexWrap';
import StyledIcon from '../../hoc/Icon';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath, BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineCar, AiOutlineStar } from 'react-icons/ai';
import Logo from '../../assests/img/logo_red.svg';
import { getPropertiesAds } from '../../config/Properties';
import { Button } from '../../hoc/Button';

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RowTitle = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const BrandImage = styled.img`
  max-width: 100%;
  display: block;
  height: 28px;
  margin: 11px;
`;

const AgentName = styled.p`
  margin-right: 80px;
  padding-right: 12px;
`;

const AgentIcon = styled.span`
  width: 78px;
  height: 78px;
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  border-color: white;
  border-width: 1px;
  display: inline-block;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  overflow: hidden;
`;

const RowFrame = styled.div`
  width: 100%;
  position: relative;
`;

const AgentIconImg = styled.img`
  vertical-align: top;
  max-width: 100%;
`;

const RowResidencial = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ContentDetail = styled.div`
  margin-bottom: 8px;
`;

const Price = styled.h2`
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 1rem;
  text-align: left;
`;

const Address = styled.p`
  margin: 0px;
  font-size: 1rem;
`;

const Structure = styled.div`
  display: flex;
  width: 100%;
`;

const LastFrame = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  min-width: 8%;
`;

/*brand, agentName, agentIcon,price,slides,address.types */

const CardAds = (props) => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    getPropertyAds();
  }, []);

  const getPropertyAds = async () => {
    const res = await getPropertiesAds();
    if (res) setProperty(res);
  };

  const P = property;
  const address =
    P.address?.streetNumber +
    ' ' +
    P.address?.streetName +
    ' ' +
    P.address?.city +
    ' ' +
    P.address?.state +
    P.address?.postCode;
  const slides = P.propImage?.length > 0 ? P.propImage : SliderData;
  return (
    <>
      <Card>
        <Row>
          <RowTitle>
            <BrandImage src={Logo} alt="icon" />
          </RowTitle>
        </Row>
        <RowFrame>
          <Slider slides={slides}></Slider>
        </RowFrame>
        <RowResidencial>
          <div className="row-residencial-content">
            <FlexWrap direction="row">
              <ContentDetail>
                <StyledText>
                  <Price>${P.rent} per week</Price>
                  <Address>{address}</Address>
                </StyledText>
              </ContentDetail>
            </FlexWrap>

            <Structure>
              <FlexWrap direction="row">
                <StyledText>
                  <FlexWrap direction="row">
                    <StyledIcon>
                      <BiBed />
                    </StyledIcon>
                    <StyledText>{P.numOfBed}</StyledText>
                    <StyledIcon>
                      <BiBath />
                    </StyledIcon>
                    <StyledText>{P.numOfBath}</StyledText>
                    <StyledIcon>
                      <AiOutlineCar />
                    </StyledIcon>
                    <StyledText>{P.numOfCarSpace}</StyledText>
                  </FlexWrap>
                </StyledText>
                <StyledText>{P.types}</StyledText>
              </FlexWrap>
            </Structure>
          </div>
          <LastFrame>
            {/* <Star>☆</Star> */}
            <StyledIcon>
              {' '}
              <AiOutlineStar />{' '}
            </StyledIcon>
            <StyledIcon>
              <BiDotsHorizontalRounded />
            </StyledIcon>
          </LastFrame>
        </RowResidencial>
        <Button primary size="100%">
          View Property
        </Button>
      </Card>
    </>
  );
};

export default CardAds;
