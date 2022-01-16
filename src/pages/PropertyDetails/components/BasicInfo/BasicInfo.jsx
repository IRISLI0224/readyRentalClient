import React from 'react';
import RoomType from '../../../../components/RoomType';
import PropButton from '../PropButton';
import { HeroContainer, BasicInfoContainer, VerticalMargin, ImageContainer } from '../Container';
import StyledText from '../../../../hoc/Text';
import ImageSlider from '../../../../components/Slider';

function getAvailableDate(date) {
  const newDate = new Date(String(date).split('T')[0]);
  return date ? newDate.toDateString() : 'Now';
}

const BasicInfo = ({ property }) => {
  const { availableDate, propImage } = property;

  return (
    <BasicInfoContainer>
      <HeroContainer>
        <RoomType property={property} headerSize="2rem" />
        <StyledText bold size="1.1rem">
          ${property.rent} per week
        </StyledText>
        <StyledText>Bond ${property.rent * 4}</StyledText>
        <VerticalMargin margin="1rem 0">
          <PropButton
            size="200px"
            onClick={() => {
              window.scrollTo(0, 630);
            }}
          >
            Request an inspection
          </PropButton>
        </VerticalMargin>
        <StyledText>Available Date: {getAvailableDate(availableDate)}</StyledText>
      </HeroContainer>
      <ImageContainer>
        <ImageSlider slides={propImage} width="700px" height="550px" />
      </ImageContainer>
    </BasicInfoContainer>
  );
};

export default BasicInfo;
