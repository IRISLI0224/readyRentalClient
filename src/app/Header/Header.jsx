import React from 'react';
import styled from 'styled-components';
import FilterProductTable from './components/FilterProductTable';
import Products from './components/Products';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: ${({ height }) => height}rem;
  background-color: #333f48;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
`;

const Header = () => (
  <Container height={60}>
    Here is header
    <FilterProductTable products={Products}></FilterProductTable>
  </Container>
);

export default Header;
