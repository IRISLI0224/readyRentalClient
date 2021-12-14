import React from 'react';
import styled from 'styled-components';
import Img from '../../../../assests/img/logo.svg';

const LogoP = styled.div`
  width: 284px;
  height: 64px;
  background: url(${Img}) 0% 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  margin: 0px auto;
`;

function Logo() {
  return (
    // eslint-disable-next-line
    <a href="/">
      <LogoP />
    </a>
  );
}

export default Logo;
