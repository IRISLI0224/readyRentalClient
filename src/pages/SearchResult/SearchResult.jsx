import React from 'react';
import { SliderData } from '../../components/ListCard/SliderData';
import styled from 'styled-components';
import Card from '../../components/ListCard';
import agent_icon from '../../assests/experimental_img/agent-pic.PNG';
import agent_brand from '../../assests/experimental_img/brand.PNG';
import TextStyle from '../../hoc/Text';
import FlexWrap from '../../hoc/FlexWrap';
import {Pagination} from '../../components/Pagination';
import Sorting from '../../components/Sorting';

const Container = styled.div`
    margin-left: 30%;
    margin-top: 4vh;
`
const FlexWrapSearch = styled(FlexWrap)`
    margin-bottom: 8px;
`
const SearchResult = () => {
  
  return (
    <Container>
      <FlexWrapSearch direction="row" >
        <TextStyle bold size="1rem">Real Estate & Property for sale in ACT</TextStyle>
      </FlexWrapSearch>
      <FlexWrapSearch direction="row" >
        <TextStyle>Sort <Sorting/></TextStyle>
      </FlexWrapSearch>
      <FlexWrap direction="row" >
        <Card brand={agent_brand} slides={SliderData}
          agentName="Frank" bedNum="3" bathNum="5" carNum="2" price="800"
          address="lawson ACT 2601" agentName="Frank" agentIcon={agent_icon}
          types="House"></Card>
      </FlexWrap>
      <FlexWrap direction="row" >
        <Pagination/>
      </FlexWrap>
    </Container>

  )
}
export default SearchResult;
