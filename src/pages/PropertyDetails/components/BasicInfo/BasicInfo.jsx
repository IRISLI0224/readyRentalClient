import React from 'react';
import RoomType from '../../../../components/RoomType';
import PropButton from '../PropButton';
import { HeroContainer, BasicInfoContainer, VerticalMargin, ImageContainer } from '../Container';
import StyledText from '../../../../hoc/Text';

const BasicInfo = ({property}) => {
  
  return(
  <BasicInfoContainer>
    <HeroContainer>
      <RoomType property={property} headerSize="2rem" />
      <StyledText bold size="1.1rem">
        ${property.rent} per week
      </StyledText>
      <StyledText>Bond ${property.rent*4}</StyledText>
      <VerticalMargin margin="1rem">
        <PropButton size="200px">
          Request an inspection
        </PropButton>
      </VerticalMargin>
      <StyledText>Available 07 Dec 2021</StyledText>
    </HeroContainer>
    <ImageContainer>Some Property Images</ImageContainer>
  </BasicInfoContainer>
);}

export default BasicInfo;
