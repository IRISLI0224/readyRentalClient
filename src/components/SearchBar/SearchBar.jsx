import React from 'react';
import styled from 'styled-components';
import FilterProductTable from '../../app/Header/components/FilterProductTable/FilterProductTable';

const Container = styled.div`
  width: 915px;
  max-height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  /* padding: 16px 18px; */
  box-sizing: border-box;
  border-radius: 3px;
  margin-top: 20px;
  height: 200px;
  margin-left: 50px;
`;

const SearchBar = () => (
  <Container>
    <FilterProductTable></FilterProductTable>
  </Container>
);

export default SearchBar;
