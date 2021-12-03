import React from 'react';
import styled from 'styled-components';
import backgrounImg from '../../assests/img/Homepage-background.jpg'
import NavigationBar from './NavigationBar/Navigationbar' 

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${({ height }) => height}rem;
  text-align: center;
  color:white;
  height:560px;
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  
  
`;



const Header = (props) => (
  <Container className="Header" height={12}  img={backgrounImg}>
    
     <NavigationBar/>
  </Container>
);

export default Header;