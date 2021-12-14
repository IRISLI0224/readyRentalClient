import React from 'react';
import RoomType from '../../../../components/RoomType';
import PropButton from '../PropButton';
import { HeroContainer, MainContainer, VerticalMargin, ImageContainer } from '../Container';
import StyledText from '../../../../hoc/Text';

const BasicInfo = () => (
  <MainContainer>
    <HeroContainer>
      <RoomType headerSize="2rem" />
      <StyledText bold size="1.1rem">
        $430 per week
      </StyledText>
      <StyledText>Bond $1863</StyledText>
      <VerticalMargin margin="1rem">
        <PropButton size="200px">
          Request an inspection
        </PropButton>
      </VerticalMargin>
      <StyledText>Available 07 Dec 2021</StyledText>
    </HeroContainer>
    <ImageContainer></ImageContainer>
  </MainContainer>
);

export default BasicInfo;
