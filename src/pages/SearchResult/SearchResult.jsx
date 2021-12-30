import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SliderData } from '../../components/ListCard/SliderData';
import styled from 'styled-components';
import Card from '../../components/ListCard';
import agent_icon from '../../assests/experimental_img/agent-pic.PNG';
import agent_brand from '../../assests/experimental_img/brand.PNG';
import TextStyle from '../../hoc/Text';
import FlexWrap from '../../hoc/FlexWrap';
import Pagination from '../../components/Pagination';
import { getPropertiesBySearch } from '../../config/Properties';

const Container = styled.div`
  margin-left: 30vw;
  margin-top: 20px;
`;
const FlexWrapSearch = styled(FlexWrap)`
  margin-bottom: 8px;
`;
const SearchResult = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPropertiesBySearch(location.search);
      setProperties(data);
    };
    fetchData();
  }, [location.search]);
  const addressObjectToString = ({ streetNumber, streetName, city, state }) => {
    return `${streetNumber} ${streetName}, ${city}, ${state}`;
  };
  const totalPage = { totalPage: 2 };
  const query = new URLSearchParams(location.search);
  const SearchInput = query.get('input');
  return (
    <Container>
      <FlexWrapSearch direction="row">
        <TextStyle bold size="1rem">
          Real Estate & Property for sale in {SearchInput}
        </TextStyle>
      </FlexWrapSearch>
      <FlexWrapSearch direction="row">
        <TextStyle>1-25 of 1040 results</TextStyle>
      </FlexWrapSearch>
      {properties.map((property) => (
        <FlexWrap direction="row" key={property._id}>
          <Card
            price={property.rent}
            slides={SliderData}
            address={addressObjectToString(property.address)}
            types={property.roomType}
            bed={property.numOfBed}
            bath={property.numOfBath}
            car={property.numOfCarSpace}
            agentName="Frank"
          />
        </FlexWrap>
      ))}
      <Pagination config={totalPage} />
    </Container>
  );
};
export default SearchResult;
