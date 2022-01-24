import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Carousel } from '@trendyol-js/react-carousel';
import SmallCardAds from '../SmallCardAds/SmallCardAds';

const Container = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const PropertyBack = styled.div``;

const PropertyContainer = styled.div``;

const Title = styled.h1`
  color: #0d263b;
  font-weight: 600;
  line-height: 2.375rem;
  margin-bottom: 10px;
  margin-top: 0;
`;

const Descriptions = styled.div`
  font-size: 16px;
  color: #696969;
  line-height: 1.25rem;
  margin-bottom: 0;
`;
//const cardNumber = window.innerWidth <= 800 ? 2 : window.innerWidth <= 1024 ? 3 : 4;
const SlideCardContainer = ({ properties }) => {
  const [cardNumber, setCardNumber] = useState(4);

  useEffect(() => {
    const number = window.innerWidth <= 1200 ? 2.5 : window.innerWidth <= 1500 ? 3.5 : 4;
    setCardNumber(number);
  }, [window.innerWidth]);

  return (
    <Container>
      {' '}
      <br />
      <br />
      <Title>Recent Properties for Rent </Title>
      <Descriptions>Find a suitable property around your place to live</Descriptions>
      <br />
      <br />
      <Carousel show={4.5} slide={4} swiping={true} rightArrow={false} leftArrow={true}>
        {properties.map((property, index) => {
          return (
            <PropertyBack key={index}>
              <PropertyContainer key={index} style={{ backgroundColor: 'white' }}>
                <SmallCardAds PropertyInfo={property} key={index} style={{}}></SmallCardAds>
              </PropertyContainer>
            </PropertyBack>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default SlideCardContainer;
