import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Sorting } from '../../components/SortingV2';
import CardAds from '../../components/ListCardAdsV2/CardAds';

const Section = styled.section`
  padding-top: 5rem;
  padding-bottom: 4.5rem;
  position: relative;
  display: block;
  box-sizing: border-box;
  line-height: 1.642;
  color: #777777;
  @media only screen and (max-width: 991px){
    padding-bottom: 30px;
`;
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1500px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Col9 = styled.div`
  width: 100%;
  position: relative;
  padding-right: 15px;
  @media (min-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 70%;
    max-width: 70%;
  }
`;
const Col3 = styled.div`
  width: 100%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  @media (min-width: 1200px) {
    flex: 0 0 30%;
    max-width: 30%;
  }
`;
const Listing = styled.div`
  box-shadow: rgba(13, 38, 59, 0.05) 0px 1rem 3rem 0px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  margin-bottom: 30px;
  padding: 30px;
  @media screen and (max-width: 767px) {
    padding: 0px;
  } ;
`;
const Ads = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px !important;
  padding-bottom: 0px !important;
  justify-content: center;
  padding-left: 0px;
`;
const Col12 = styled.div`
  width: 100%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  @media screen (min-width: 576x) {
    flex-grow: 0
    flex-shrink: 0 
    flex-basis: 50%;
    max-width: 50%;
  }
  @media screen (min-width: 992px) {
    flex-grow: 0
    flex-shrink: 0 
    flex-basis: 100%;
    max-width: 100%;
  }
`;
const H2 = styled.h2`
  color: #0d263b;
  font-size: 2rem;
  font-weight: 600;
`;
const H2Wrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
`;
const Ol = styled.ol`
  list-style: none;
  padding: 0;
  margin-bottom: 5rem;
  text-align: center;
`;

const SearchResultV2 = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const SearchInput = query.get('input');

  return (
    <Section>
      <Container>
        <Row>
          <Col12>
            {SearchInput ? (
              <H2Wrapper>
                <H2>Ready Rental & Property For Rent in {SearchInput}</H2>
              </H2Wrapper>
            ) : (
              <H2Wrapper>
                <H2>Ready Rental & Property For Rent</H2>
              </H2Wrapper>
            )}
            <Ol>
              <p>Home / Search Result</p>
            </Ol>
          </Col12>
        </Row>
        <Row>
          <Col9>
            <Sorting />
          </Col9>
          <Col3>
            <Listing>
              <Ads>
                <H2>Similar Properties</H2>
                <CardAds />
                <CardAds />
              </Ads>
            </Listing>
          </Col3>
        </Row>
      </Container>
    </Section>
  );
};
export default SearchResultV2;
