import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TextStyle from '../../hoc/Text';
import FlexWrap from '../../hoc/FlexWrap';
import { getPropertiesBySearch } from '../../config/Properties';
import { Sorting } from '../../components/Sorting';

const Container = styled.div`
  /* margin-left: 20vw;
  margin-top: 16px; */
  margin: 1rem auto;
  width: 800px;
  @media screen and (max-width: 1024px) {
    margin: 0px;
}
`;
const FlexWrapSearch = styled(FlexWrap)`
  margin-bottom: 8px;
  @media screen and (max-width: 1024px) {
    margin: 0px 16px;
  }
`;
const SearchResult = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const SearchInput = query.get('input');

  return (
    <Container>
      <FlexWrapSearch direction="row">
        {SearchInput ? (
          <TextStyle bold size="1rem">
            Ready Rental & Property for sale in {SearchInput}
          </TextStyle>
        ) : null}
      </FlexWrapSearch>
      <Sorting />
    </Container>
  );
};
export default SearchResult;
