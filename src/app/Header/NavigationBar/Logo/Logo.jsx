import React from 'react';
import styled from 'styled-components';
import Img from '../../../../assests/img/logo1.png';
import title from '../../../../assests/img/title1.png';

const LogoP = styled.div`
  /* width: 284px;
  height: 64px;
  background: url(${Img}) 0% 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer; */
  background: url(${Img}) 0% 45% no-repeat;
  margin: 0px auto; 
  width:70px;
  height:auto;
  @media (max-width: 768px) {
    width: 50px;
    height: auto;
  }
`;

const Title = styled.div`
  /* width: 150px;
  height: auto;
  background: url(${title}) 0% 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  margin: 0px auto; */
  background: url(${title}) 0% 45% no-repeat;
  margin-left:5px; 
  width:250px;
  height:auto;
  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: space-around;
  flex-wrap: nowrap;
  /* width: 284px; */
  height: 64px;
  background-size: 100% 100%;
  cursor: pointer;
  margin: 0px auto;
  margin-left:20px;
  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
`;

function Logo() {
  return (
    // eslint-disable-next-line
    <a href="/">
      <Container>
        <LogoP />
        <Title />
      </Container>
    </a>
  );
}

export default Logo;
