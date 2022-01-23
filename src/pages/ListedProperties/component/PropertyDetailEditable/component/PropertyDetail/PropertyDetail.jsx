import React from 'react';
import styled from 'styled-components';
import { Wrapper, WrapperColumnFlex, NoShadowWrapper } from '../../../Wrapper';
import RoomType from '../../../../../../components/RoomType';
import { ReactComponent as HouseIcon } from '../../../../../../assests/img/iconHouse.svg';
import PropTypes from 'prop-types';
const StyledHr = styled.hr`
  margin: 0;
  /* border: 0.5px solid red; */
  border: 0.5px solid rgb(0 0 0 / 20%);
`;
const PropertyDetail = ({ property }) => {
  return (
    <div>
      <Wrapper>
        <NoShadowWrapper>
          {property.propImage[0] ? (
            <img src={property.propImage[0]} alt="house1" style={{ height: '100px' }} />
          ) : (
            <HouseIcon alt="house" />
          )}
          <WrapperColumnFlex>
            <RoomType property={property} />
          </WrapperColumnFlex>
        </NoShadowWrapper>
      </Wrapper>
      <StyledHr />
    </div>
  );
};

PropertyDetail.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetail;
