import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import SlideCard from './SlideCard';

const PropertyBack = styled.div`
  height: 15rem;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-image: linear-gradient(#f8f8f8, #ffffff);
  text-align: center;
  padding: 40px 0;
  width: 100%;
`;

const PropertyContainer = styled.div`
  height: 15rem;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-image: linear-gradient(#ffffff, #ffffff);
  text-align: center;
  padding: 40px 0;
  width: 60%;
  opacity: 80%;
`;

const SlideCardContainer = ({ properties }) => {
  return (
    <>
      {' '}
      <h2>Recommended Properties </h2>
      <Carousel
        vertical
        autoplay
        infinite
        speed={1000}
        autoplayInterval={10000}
        resetAutoplay={false}
      >
        {properties.map((property, index) => {
          return (
            <PropertyBack key={index}>
              <PropertyContainer key={index} style={{ backgroundColor: 'white' }}>
                <SlideCard PropertyInfo={property} key={index} style={{}}></SlideCard>
              </PropertyContainer>
            </PropertyBack>
          );
        })}
      </Carousel>
    </>
  );
};

export default SlideCardContainer;
