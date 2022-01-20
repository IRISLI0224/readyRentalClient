import React from 'react';
import styled from 'styled-components';
import HomepageSection from '../../../../hoc/HomepageSection';
import WhyChooseUsCard from './WhyChooseUsCard';
import HouseImg from './WhyChooseUsCard/Img/home.png';
import Calculator from './WhyChooseUsCard/Img/calculator.png';
import Map from './WhyChooseUsCard/Img/map.png';
import Handshake from './WhyChooseUsCard/Img/handshake.png';

const Container = styled.div`
  background-color: #f6f8f9;
  padding: 100px 0 70px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const WhyChooseUs = () => (
  <Container>
    <HomepageSection
      title="Why Choose Us"
      subtitle="We provide full service at every step."
      wrap="wrap"
    >
      <WhyChooseUsCard title="Trusted By Thousands" src={Handshake}>
        With over 1 million+ homes for sale available on the website, Trulia can match you with a
        house you will want to call home.
      </WhyChooseUsCard>
      <WhyChooseUsCard title="Wide Renge Of Properties" src={HouseImg}>
        With over 1 million+ homes for sale available on the website, Trulia can match you with a
        house you will want to call home.
      </WhyChooseUsCard>
      <WhyChooseUsCard title="Financing Made Easy" src={Calculator}>
        With over 1 million+ homes for sale available on the website, Trulia can match you with a
        house you will want to call home.
      </WhyChooseUsCard>
      <WhyChooseUsCard title="See Neighborhoods" src={Map}>
        With over 1 million+ homes for sale available on the website, Trulia can match you with a
        house you will want to call home.
      </WhyChooseUsCard>
    </HomepageSection>
  </Container>
);

export default WhyChooseUs;
