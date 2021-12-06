import React from 'react';
import styled from 'styled-components';
import backgrounImg from '../../assests/img/Homepage-background.jpg'
import NextSearchBar from '../../components/NextSearchBar';
import SearchBar from '../../components/SearchBar';
import NavigationBar from './NavigationBar/Navigationbar' 

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: center;
  color:white;
  height:560px;
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  background: url(${({ img }) => img}) no-repeat center;
`;

const SearchBarPanel = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`;

const Header = () => (
  <Container className="Header" height={12}  img={backgrounImg}>
    
     <NavigationBar/>
     <SearchBarPanel>
       <SearchBar/>
       <NextSearchBar/>
     </SearchBarPanel>
  </Container>
);

export default Header;