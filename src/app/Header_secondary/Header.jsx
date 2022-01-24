import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar/Navigationbar';

const Container = styled.div`
  position: relative;
  //overflow: hidden;
  width: 100%;
  text-align: center;
  color: white;
  box-shadow: 0 8px 8px 0 rgba(34, 34, 34, 0.07);
`;

const HeaderSecondary = () => (
  <React.Fragment>
    <Container className="Header" >
      <NavigationBar />
    </Container>
  </React.Fragment>
);

export default HeaderSecondary;
