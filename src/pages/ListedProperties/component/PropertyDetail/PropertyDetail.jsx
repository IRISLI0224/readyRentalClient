import React from 'react';
import styled from 'styled-components';
import RoomType from '../../../../hoc/RoomType';
import { Wrapper, WrapperColumnFlex, NoShadowWrapper } from '../Wrapper';

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
            <img
              //cannot get image by relative path
              src="https://argonaut.au.reastatic.net/consumer-list/prod/pll-dashboard/iconHousePlaceholder-b6ccfc15da9c0dcaa97b3c752f58b0b2.svg"
              alt=""
            />
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
