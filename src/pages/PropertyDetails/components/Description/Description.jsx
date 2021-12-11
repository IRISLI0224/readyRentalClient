import React from 'react';
import { BodyContainer, DescItem, VerticalMargin } from '../Container';
import FlexWrap from '../../../../hoc/FlexWrap';
import StyledText from '../../../../hoc/Text';
import StyledIcon from '../../../../hoc/Icon';
import { MdOutlineGarage } from 'react-icons/md';

const Description = () => (
  <>
    <BodyContainer direction="column">
      <DescItem>
        <StyledText bold size="1.1rem">
          Ideal Family Home
        </StyledText>
        <StyledText>
          *DID YOU KNOW YOU CAN BOOK AN INSPECTION ONLINE NOW?* Simply click EMAIL AGENT and we'll
          respond instantly with available appointment times. You must register to confirm your
          chosen inspection time, and so that we can advise you of any changes. Don't miss out on
          calling this property home, book your inspection now!!! This impressive home offers three
          bedrooms, master with ensuite and walk-in robe, other bedrooms with built-in robes, open
          plan kitchen/meals area, second living area, ducted heating, double lock-up garage with
          internal access, and landscaped gardens, located in the heart of Caroline Springs and only
          minutes away from schools, public transport, and all local amenities. This home would be
          best suited for the potential applicant seeking a 6-month lease.
        </StyledText>
      </DescItem>
      <DescItem>
        <StyledText bold size="1.1rem">
          Property Features
        </StyledText>
        <VerticalMargin margin="1rem">
          <FlexWrap direction="row">
            <StyledIcon primary>
              <MdOutlineGarage />
            </StyledIcon>
            <StyledText>
              &nbsp;Garage spaces: <b>2</b>
            </StyledText>
          </FlexWrap>
        </VerticalMargin>
      </DescItem>
    </BodyContainer>
  </>
);

export default Description;
