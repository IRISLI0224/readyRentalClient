import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar/Navigationbar';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: center;
  color: white;
  height: 560px;
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  background: url(${({ img }) => img}) no-repeat center;
`;

const Header_secondary = () => (
  <Container className="Header" >
    <NavigationBar />
  </Container>
);

export default Header_secondary;
