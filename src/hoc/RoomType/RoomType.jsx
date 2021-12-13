import React from 'react';
import FlexWrap from '../../hoc/FlexWrap';
import StyledIcon from '../../hoc/Icon';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';

const RoomType = ({ headerSize }) => (
  <>
    <StyledText bold size={headerSize}>
      10 Quilan Court, Caroline Springs, VIC 3023
    </StyledText>
    <FlexWrap direction="row">
      <StyledText>
        <FlexWrap direction="row">
          <StyledIcon>
            <BiBed />
          </StyledIcon>
          <StyledText>3&nbsp;&nbsp;</StyledText>
          <StyledIcon>
            <BiBath />
          </StyledIcon>
          <StyledText>2&nbsp;&nbsp;</StyledText>
          <StyledIcon>
            <AiOutlineCar />
          </StyledIcon>
          <StyledText>2&nbsp;&nbsp;</StyledText>
        </FlexWrap>
      </StyledText>
      <StyledText>House</StyledText>
    </FlexWrap>
  </>
);

export default RoomType;
