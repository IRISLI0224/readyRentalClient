import React from 'react';
import styled from 'styled-components';
import HomepageSection from '../../../../hoc/HomepageSection';
import Card from './Card';
import Melbourne from '../../../../assests/img/cities/Melbourne.jpg'
import Perth from '../../../../assests/img/cities/Perth.jpg'
import Adelaide from '../../../../assests/img/cities/Adelaide.jpg'
import Brisbane from '../../../../assests/img/cities/Brisbane.jpeg'
import Canberra from '../../../../assests/img/cities/Canberra.jpg'
import Hobart from '../../../../assests/img/cities/Hobart.jpeg'
import Sydney from '../../../../assests/img/cities/Sydney.jpg'

const Container = styled.div`
  padding: 30px 15px 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1500px;
  overflow: hidden;
  align-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerOne = styled.div`
  padding: 2px 0 70px 0;
  margin-top:-10px;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerTwo = styled.div`
  padding: 20px 0 70px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerThree = styled.div`
  //padding: 0px 0 70px 0;
  margin-top:-130px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerFour = styled.div`
  //padding: 0px 0 70px 0;
  margin-top:-130px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const cityProperties = ['1', '2', '3', '4', '5', '6', '7'];
const widthSmall = '240';
const widthLarge = '600';
const heightSmall = '300';
const heightLarge = '630';

const ExploreCities = () => (
  <Container>
    <HomepageSection
      title="Explore Cities"
      subtitle="Explore your ideal properties in different cities around Australia "
      wrap="wrap"
    >
      <ContainerOne>
        <ContainerTwo>
          <Card
            name="Brisbane"
            city="Brisbane"
            background={Brisbane}
            background_alt="all_types.jpg"
            number={cityProperties[0]}
            icon_alt="all_types.png"
            width={widthSmall}
            height={heightSmall}
          ></Card>
          <Card
            name="Perth"
            city="Perth"
            background={Perth}
            background_alt="house.jpg"
            number={cityProperties[1]}
            icon_alt="house.png"
            width={widthSmall}
            height={heightSmall}
          ></Card>
        </ContainerTwo>
        <ContainerTwo>
          <Card
            name="Adelaide"
            city="Adelaide"
            background={Adelaide}
            background_alt="apartment.jpg"
            number={cityProperties[2]}
            icon_alt="apartment.png"
            width={widthSmall}
            height={heightSmall}
          ></Card>
          <Card
            name="Hobart"
            city="Hobart"
            background={Hobart}
            background_alt="studio.jpg"
            number={cityProperties[3]}
            icon_alt="studio.png"
            width={widthSmall}
            height={heightSmall}
          ></Card>
        </ContainerTwo>
      </ContainerOne>
      <br />
      <br />
      <ContainerThree>
        <Card
          name="Sydney"
          city="Sydney"
          background={Sydney}
          background_alt="studio.jpg"
          number={cityProperties[4]}
          icon_alt="studio.png"
          width={widthLarge}
          height={heightLarge}
        ></Card>
      </ContainerThree>
      <ContainerFour>
        <Card
          name="Canberra"
          city="Canberra"
          background={Canberra}
          background_alt="studio.jpg"
          number={cityProperties[5]}
          icon_alt="studio.png"
          width={widthSmall}
          height={heightSmall}
        ></Card>
        <Card
          name="Melbourne"
          city="Melbourne"
          background={Melbourne}
          background_alt="studio.jpg"
          number={cityProperties[6]}
          icon_alt="studio.png"
          width={widthSmall}
          height={heightSmall}
        ></Card>
      </ContainerFour>
    </HomepageSection>
  </Container>
);

export default ExploreCities;
