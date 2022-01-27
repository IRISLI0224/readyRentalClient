import React from 'react';
import styled from 'styled-components';
import FilterProductTable from '../../app/Header/FilterProductTable';

const Container = styled.div`
  width: 915px;
  max-height: 180px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 50px;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchBar = () => (
  <Container>
    <FilterProductTable />
  </Container>
);

export default SearchBar;
