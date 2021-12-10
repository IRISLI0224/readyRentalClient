import React from 'react';
import PropButton from '../Button';
import {
  HeroContainer,
  MainContainer,
  VerticalMargin,
  ImageContainer,
  FlexWrap,
} from '../Container';
import StyledIcon from '../Icon';
import { BoldText, HeaderText, StyledText } from '../Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';

const BasicInfo = () => (
  <MainContainer>
    <HeroContainer>
      <HeaderText>10 Quilan Court, Caroline Springs, VIC 3023</HeaderText>
      <FlexWrap direction="row">
        <StyledText>
          <FlexWrap direction="row">
            <StyledIcon>
              <BiBed />
            </StyledIcon>
            &nbsp;3&nbsp;&nbsp;&nbsp;
            <StyledIcon>
              <BiBath />
            </StyledIcon>
            &nbsp;2&nbsp;&nbsp;&nbsp;
            <StyledIcon>
              <AiOutlineCar />
            </StyledIcon>
            &nbsp;2&nbsp;&nbsp;&nbsp;
          </FlexWrap>
        </StyledText>
        <StyledText>House</StyledText>
      </FlexWrap>
      <BoldText>$430 per week</BoldText>
      <StyledText>Bond $1863</StyledText>
      <VerticalMargin margin="1rem">
        <PropButton primary size="200px">
          Request an inspection
        </PropButton>
      </VerticalMargin>
      <StyledText>Available 07 Dec 2021</StyledText>
    </HeroContainer>
    <ImageContainer></ImageContainer>
  </MainContainer>
);

export default BasicInfo;
