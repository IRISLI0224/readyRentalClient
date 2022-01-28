import React from 'react';
import styled from 'styled-components';
import SecondaryNavigationBar from './NavigationBar/Navigationbar';
import NavigationBar from '../Header/NavigationBar/Navigationbar';

const Container = styled.div`
  position: relative;
  //overflow: hidden;
  width: 100%;
  text-align: center;
  color: white;
  box-shadow: 0 8px 8px 0 rgba(34, 34, 34, 0.07);
  margin: 10px 0;
`;

const NavigationDiv = styled.div`
  @media (min-width: 768.5px) {
    display: none;
  }
`;
const SecondaryNavigationDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderSecondary = () => (
  <React.Fragment>
    <Container className="Header">
      <NavigationDiv>
        <NavigationBar />
      </NavigationDiv>
      <SecondaryNavigationDiv>
        <SecondaryNavigationBar />
      </SecondaryNavigationDiv>
    </Container>
  </React.Fragment>
);

export default HeaderSecondary;
