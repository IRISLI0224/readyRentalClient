import React from 'react';
import styled from 'styled-components';
import Img from '../../../../assests/img/logo.svg';

const Logo_p = styled.div`
  width: 284px;
  height: 64px;
  background: url(${Img}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

function Logo() {
  return (
    // eslint-disable-next-line
    <Logo_p  />
  );
}

export default Logo;