import React from 'react';
import styled from 'styled-components';
import Button from '../../hoc/Button';
import { HeroContainer, MainContainer } from './components/Container';
import { ButtonContainer } from './components/Container/Container';
import { BoldText, HeaderText, StyledText } from './components/Text';
import image1 from './image/1.jpg';

const PropertyImage = styled.div`
  background-image: url(${image1});
`;

const BasicInfo = () => (
  <>
    <MainContainer>
      <HeroContainer>
        <HeaderText>10 Quilan Court, Caroline Springs, Vic 3023</HeaderText>
        <StyledText>House</StyledText>
        <BoldText>$430 per week</BoldText>
        <StyledText>Bond $1863</StyledText>
        <ButtonContainer>
        <Button size="200px">Request an inspection</Button>
        </ButtonContainer>
        <StyledText>Available 07 Dec 2021</StyledText>
      </HeroContainer>
      <PropertyImage />
    </MainContainer>
  </>
);

const PropertyDetail = () => (
  <>
    <BasicInfo />
  </>
);

export default PropertyDetail;
