import React from 'react';
import { BodyContainer, DescItem, VerticalMargin } from '../Container';
import FlexWrap from '../../../../hoc/FlexWrap';
import StyledText from '../../../../hoc/Text';
import StyledIcon from '../../../../hoc/Icon';
import { MdOutlineGarage } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa';
import { BsCoin } from 'react-icons/bs';
import { GiCat } from 'react-icons/gi';
import { MdSmokeFree } from 'react-icons/md';
import { GiSofa } from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { FaIntercom } from 'react-icons/fa';

const Description = ({property}) => (
  <>
    <BodyContainer direction="column">
      <DescItem>
        <StyledText bold size="1.1rem">
          Ideal Family Home
        </StyledText>
        <StyledText>
         {property.description}
        </StyledText>
      </DescItem>
      <DescItem>
        <StyledText bold size="1.1rem">
          Property Features
        </StyledText>
        <VerticalMargin margin="1rem">
          <FlexWrap direction="row">

          {/* Number of beds */}          
            <StyledIcon primary>
              <FaBed  />
            </StyledIcon>
            <StyledText>
              &nbsp;Bed Number: <b>{property.numOfBed}</b>
            </StyledText>

            {/* Number of Bath */}
            <StyledIcon primary>
              <FaBath/>
            </StyledIcon>
            <StyledText>
              &nbsp;Bath: <b>{property.numOfBath}</b>
            </StyledText>

            {/* Number of Garage spaces */}
            <StyledIcon primary>
              <MdOutlineGarage />
            </StyledIcon>
            <StyledText>
              &nbsp;Garage spaces: <b>{property.numOfCarSpace}</b>
            </StyledText>


          {/* Room Type */}
            <StyledIcon primary>
              <FaHouseUser />
            </StyledIcon>
            <StyledText>
              &nbsp;Room Type: <b>{property.roomType}</b>
            </StyledText>

          {/* Rent */}
            <StyledIcon primary>
              <BsCoin />
            </StyledIcon>
            <StyledText>
              &nbsp;Rent: <b>${property.rent}</b>
            </StyledText>

          {/* Pet Allowed */}
            <StyledIcon primary>
              <GiCat />
            </StyledIcon>
            <StyledText>
              &nbsp;Pet Allowed: <b>{property.petAllowed?'Yes':'No'}</b>
            </StyledText>

          {/* Smoke Allowed */}
            <StyledIcon primary>
              <MdSmokeFree />
            </StyledIcon>
            <StyledText>
              &nbsp;Smoke Allowed: <b>{property.smokeAllowed?'Yes':'No'}</b>
            </StyledText>   

          {/* Furnished */}
            <StyledIcon primary>
              <GiSofa />
            </StyledIcon>
            <StyledText>
              &nbsp;Furnished: <b>{property.furnished?'Yes':'No'}</b>
            </StyledText>

          {/* AirCon */}
            <StyledIcon primary>
              <BsSnow />
            </StyledIcon>
            <StyledText>
              &nbsp;Air-Conditioning: <b>{property.airCon?'Yes':'No'}</b>
            </StyledText>

          {/* Intercom */}
            <StyledIcon primary>
              <FaIntercom />
            </StyledIcon>
            <StyledText>
              &nbsp;Intercom: <b>{property.intercom?'Yes':'No'}</b>
            </StyledText>
          </FlexWrap>
        </VerticalMargin>
      </DescItem>
    </BodyContainer>
  </>
);

export default Description;
