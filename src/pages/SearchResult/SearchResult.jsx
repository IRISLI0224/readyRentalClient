import React, {useEffect, useState } from 'react';
import { useLocation} from "react-router-dom";
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
`
const FlexWrapSearch = styled(FlexWrap)`
    margin-bottom: 8px;
`
const SearchResult = () => {
  const location = useLocation();
  // use location.search to get the query string
  const [properties, setProperties]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPropertiesBySearch(location.search);
      setProperties(data);
    }
    fetchData();
  },[location.search])


  const totalPage = {totalPage: 2};


  return (
    <Container>
      <FlexWrapSearch direction="row" >
        <TextStyle bold size="1rem">Real Estate & Property for sale in ACT</TextStyle>
      </FlexWrapSearch>
      <FlexWrapSearch direction="row" >
        <TextStyle>1-25 of 1040 results</TextStyle>
      </FlexWrapSearch>
      {/* properties.map((property) => <Card />) */}
      <FlexWrap direction="row" >
        <Card brand={agent_brand} slides={SliderData}
          agentName="Frank" bedNum="3" bathNum="5" carNum="2" price="800"
          address="lawson ACT 2601" agentName="Frank" agentIcon={agent_icon}
          types="House"></Card>
      </FlexWrap>
      <FlexWrap direction="row" >
        <Card brand={agent_brand} slides={SliderData}
          agentName="Frank" bedNum="3" bathNum="5" carNum="2" price="800"
          address="lawson ACT 2601" agentName="Frank" agentIcon={agent_icon}
          types="House"></Card>
      </FlexWrap>
      {properties.map((property, index) => (
        <FlexWrap direction="row"
          key={index} >
          <Card
            key={index}
            price={property.price}
            slides={SliderData}
            address={property.address}
            types={property.roomType}
            brand={agent_brand} 
            agentName="Frank"
          />
          </FlexWrap>
        ))}
      
      <Pagination config={totalPage}/>
    </Container>

  )
}
export default SearchResult;
