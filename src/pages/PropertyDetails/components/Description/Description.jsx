import React from 'react';
import styled from 'styled-components';
import { BodyContainer, DescItem, VerticalMargin } from '../Container';
import FlexWrap from '../../../../hoc/FlexWrap';
import StyledText from '../../../../hoc/Text';
import StyledIcon from '../../../../hoc/Icon';
import { MdOutlineGarage } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { GiCat } from 'react-icons/gi';
import { MdSmokeFree } from 'react-icons/md';
import { GiSofa } from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { FaIntercom } from 'react-icons/fa';

const FeatureContainer = styled(FlexWrap)`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const BodyContainers = styled(BodyContainer)`
@media screen and (max-width: 1024px) {
  min-width: 100%;
}
`

const DescItems = styled(DescItem)`
@media screen and (max-width: 1024px) {
  width: 80vw;
}
`

const Description = ({ property }) => (
  <>
    <BodyContainers direction="column">
      <DescItems>
        <StyledText>{property.description}</StyledText>
      </DescItems>
      <DescItems>
        <StyledText bold size="1.1rem">
          Property Features
        </StyledText>
        <VerticalMargin margin="1rem 0 0 2rem">
          <FlexWrap direction="row">
            {/* Number of beds */}
            <FeatureContainer>
              <StyledIcon primary>
                <FaBed />
              </StyledIcon>
              <StyledText>
                &nbsp;Bed Number: <b>{property.numOfBed}</b>
              </StyledText>
            </FeatureContainer>

            {/* Number of Bath */}
            <FeatureContainer>
              <StyledIcon primary>
                <FaBath />
              </StyledIcon>
              <StyledText>
                &nbsp;Bath: <b>{property.numOfBath}</b>
              </StyledText>
            </FeatureContainer>

            {/* Number of Garage spaces */}
            <FeatureContainer>
              <StyledIcon primary>
                <MdOutlineGarage />
              </StyledIcon>
              <StyledText>
                &nbsp;Garage spaces: <b>{property.numOfCarSpace}</b>
              </StyledText>
            </FeatureContainer>

            {/* Pet Allowed */}
            {property.petAllowed && (
              <FeatureContainer>
                <StyledIcon primary>
                  <GiCat />
                </StyledIcon>
                <StyledText>&nbsp;Pet Allowed</StyledText>
              </FeatureContainer>
            )}

            {/* Smoke Allowed */}
            {property.smokeAllowed && (
              <FeatureContainer>
                <StyledIcon primary>
                  <MdSmokeFree />
                </StyledIcon>
                <StyledText>&nbsp;Smoke Allowed</StyledText>
              </FeatureContainer>
            )}

            {/* Furnished */}
            {property.furnished && (
              <FeatureContainer>
                <StyledIcon primary>
                  <GiSofa />
                </StyledIcon>
                <StyledText>&nbsp;Furnished</StyledText>
              </FeatureContainer>
            )}

            {/* AirCon */}
            {property.airCon && (
              <FeatureContainer>
                <StyledIcon primary>
                  <BsSnow />
                </StyledIcon>
                <StyledText>&nbsp;Air-Conditioning</StyledText>
              </FeatureContainer>
            )}

            {/* Intercom */}
            {property.intercom && (
              <FeatureContainer>
                <StyledIcon primary>
                  <FaIntercom />
                </StyledIcon>
                <StyledText>&nbsp;Intercom</StyledText>
              </FeatureContainer>
            )}
          </FlexWrap>
        </VerticalMargin>
      </DescItems>
    </BodyContainers>
  </>
);

export default Description;
