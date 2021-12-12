import React from 'react';
import styled from 'styled-components';
import RoomType from '../../../../hoc/RoomType';
import { Wrapper, WrapperColumnFlex, NoShadowWrapper } from '../Wrapper';
import { ReactComponent as HouseIcon } from '../../../../assests/img/iconHouse.svg';

const StyledHr = styled.hr`
  margin: 0;
  /* border: 0.5px solid red; */
  border: 0.5px solid rgb(0 0 0 / 20%);
`;
class PropertyDetail extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <NoShadowWrapper>
            <HouseIcon alt="house" />
            <WrapperColumnFlex>
              <RoomType />
            </WrapperColumnFlex>
          </NoShadowWrapper>
        </Wrapper>
        <StyledHr />
      </div>
    );
  }
}

export default PropertyDetail;
