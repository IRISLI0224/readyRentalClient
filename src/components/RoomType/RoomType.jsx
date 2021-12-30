import React from 'react';
import FlexWrap from '../../hoc/FlexWrap';
import StyledIcon from '../../hoc/Icon';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';

const RoomType = ({ headerSize,Property }) => (
  <>
    <StyledText bold size={headerSize}>
      123 Quilan Court, Caroline Springs, VIC 3023
    </StyledText>
    <FlexWrap direction="row">
      <StyledText>
        <FlexWrap direction="row">
          <StyledIcon>
            <BiBed />
          </StyledIcon>
          <StyledText>{Property.numOfBed}&nbsp;&nbsp;</StyledText>
          <StyledIcon>
            <BiBath />
          </StyledIcon>
          <StyledText>{Property.numOfBath}&nbsp;&nbsp;</StyledText>
          <StyledIcon>
            <AiOutlineCar />
          </StyledIcon>
          <StyledText>{Property.numOfCarSpace}&nbsp;&nbsp;</StyledText>
        </FlexWrap>
      </StyledText>
      <StyledText>{Property.roomType}</StyledText>
    </FlexWrap>
  </>
);

export default RoomType;
