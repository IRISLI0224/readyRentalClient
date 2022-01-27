import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomepageSection from '../../../../hoc/HomepageSection';
import ExploreCitiesCard from './ExploreCitiesCard';
import Melbourne from '../../../../assets/img/cities/Melbourne.jpg';
import Perth from '../../../../assets/img/cities/Perth.jpg';
import Adelaide from '../../../../assets/img/cities/Adelaide.jpg';
import Brisbane from '../../../../assets/img/cities/Brisbane.jpeg';
import Canberra from '../../../../assets/img/cities/Canberra.jpg';
import Hobart from '../../../../assets/img/cities/Hobart.jpeg';
import Sydney from '../../../../assets/img/cities/Sydney.jpg';
import { getPropertiesCountbyCity } from '../../../../config/Properties';

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
  margin-top: -10px;
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
  margin-top: -130px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerFour = styled.div`
  //padding: 0px 0 70px 0;
  margin-top: -130px;
  @media (max-width: 1400px) {
    display: none;
  }
`;

//const cityProperties = ['1', '2', '3', '4', '5', '6', '7'];
const widthSmall = '240';
const widthLarge = '510';
const heightSmall = '300';
const heightLarge = '630';

const ExploreCities = () => {
  const [cityProperties, setCityProperties] = useState(['1', '2', '3', '4', '5', '6', '7']);

  useEffect(() => {
    getPropetyCounts();
  }, []);

  const getPropetyCounts = async () => {
    const counts = await getPropertiesCountbyCity();
    setCityProperties(counts);
  };

  return (
    <React.Fragment>
      <Container>
        <HomepageSection
          title="Explore Cities"
          subtitle="Explore your ideal properties in different cities around Australia "
          wrap="wrap"
        >
          <ContainerOne>
            <ContainerTwo>
              <ExploreCitiesCard
                name="Brisbane"
                city="Brisbane"
                background={Brisbane}
                background_alt="all_types.jpg"
                number={cityProperties[0]}
                icon_alt="all_types.png"
                width={widthSmall}
                height={heightSmall}
              ></ExploreCitiesCard>
              <ExploreCitiesCard
                name="Perth"
                city="Perth"
                background={Perth}
                background_alt="house.jpg"
                number={cityProperties[1]}
                icon_alt="house.png"
                width={widthSmall}
                height={heightSmall}
              ></ExploreCitiesCard>
            </ContainerTwo>
            <ContainerTwo>
              <ExploreCitiesCard
                name="Adelaide"
                city="Adelaide"
                background={Adelaide}
                background_alt="apartment.jpg"
                number={cityProperties[2]}
                icon_alt="apartment.png"
                width={widthSmall}
                height={heightSmall}
              ></ExploreCitiesCard>
              <ExploreCitiesCard
                name="Hobart"
                city="Hobart"
                background={Hobart}
                background_alt="studio.jpg"
                number={cityProperties[3]}
                icon_alt="studio.png"
                width={widthSmall}
                height={heightSmall}
              ></ExploreCitiesCard>
            </ContainerTwo>
          </ContainerOne>
          <br />
          <br />
          <ContainerThree>
            <ExploreCitiesCard
              name="Sydney"
              city="Sydney"
              background={Sydney}
              background_alt="studio.jpg"
              number={cityProperties[4]}
              icon_alt="studio.png"
              width={widthLarge}
              height={heightLarge}
            ></ExploreCitiesCard>
          </ContainerThree>
          <ContainerFour>
            <ExploreCitiesCard
              name="Canberra"
              city="Canberra"
              background={Canberra}
              background_alt="studio.jpg"
              number={cityProperties[5]}
              icon_alt="studio.png"
              width={widthSmall}
              height={heightSmall}
            ></ExploreCitiesCard>
            <ExploreCitiesCard
              name="Melbourne"
              city="Melbourne"
              background={Melbourne}
              background_alt="studio.jpg"
              number={cityProperties[6]}
              icon_alt="studio.png"
              width={widthSmall}
              height={heightSmall}
            ></ExploreCitiesCard>
          </ContainerFour>
        </HomepageSection>
      </Container>
    </React.Fragment>
  );
};

export default ExploreCities;
