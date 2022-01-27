import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FlexWrap from '../../hoc/FlexWrap';
import StyledIcon from '../../hoc/Icon';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath, BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineCar, AiOutlineStar } from 'react-icons/ai';
import { getPropertiesAds } from '../../config/Properties';
import { Button } from '../../hoc/Button';
import defaultImage from '../../assets/img/room.jpg';

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;
  height: 420px;
  margin-right: 2.5px;
  margin-left: 2.5px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RowFrame = styled.div`
  width: 100%;
  position: relative;
  height: 400 px;
`;

const RowResidencial = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 500px;
`;

const ContentDetail = styled.div`
  margin-bottom: 8px;
`;

const Price = styled.h2`
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 1rem;
  text-align: left;
  margin-left: 0px;
`;

const Address = styled.p`
  margin: 0px;
  font-size: 1rem;
  text-align: left;
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

const IMG = styled.img`
  height: 200px;
  width: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

/*brand, agentName, agentIcon,price,slides,address.types */

const SmallCardAds = (property) => {
  const P = property.PropertyInfo;
  const address =
    P.address?.streetNumber +
    ' ' +
    P.address?.streetName +
    ' ' +
    P.address?.city +
    ' ' +
    P.address?.state +
    ' ' +
    P.address?.postCode;
  const img = P.propImage?.length > 0 ? P.propImage[0] : defaultImage;
  const link = '/property/' + P._id;
  return (
    <>
      <Card>
        <Row></Row>
        <RowFrame>
          <IMG src={img}></IMG>
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
        <Button primary size="100%" as="a" href={link}>
          View Property
        </Button>
      </Card>
    </>
  );
};

export default SmallCardAds;
