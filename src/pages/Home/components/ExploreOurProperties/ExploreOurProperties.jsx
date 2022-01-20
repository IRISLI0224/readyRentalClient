import React from 'react';
import styled from 'styled-components';
import HomepageSection from '../../../../hoc/HomepageSection';
import ExploreOurPropertiesCard from './ExploreOurPropertiesCard';
import HouseImg from './ExploreOurPropertiesCard/Img/house.png';
import ApartmentImg from './ExploreOurPropertiesCard/Img/apartment.png';
import StudioImg from './ExploreOurPropertiesCard/Img/studio.png';

const Container = styled.div`
  padding: 100px 0 70px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ExploreOurProperties = () => (
  <Container>
    <HomepageSection
      title="Explore Our Properties"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin"
      wrap="wrap"
    >
      <ExploreOurPropertiesCard
        icon={HouseImg}
        name="House"
        background="https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg"
        background_alt="house.jpg"
        icon_alt="house.png"
      ></ExploreOurPropertiesCard>
      <ExploreOurPropertiesCard
        icon={ApartmentImg}
        name="Apartment"
        background="https://creativelayers.net/themes/houzing-html/images/property/ep2.jpg"
        background_alt="apartment.jpg"
        icon_alt="apartment.png"
      ></ExploreOurPropertiesCard>
      <ExploreOurPropertiesCard
        icon={StudioImg}
        name="Studio"
        background="https://creativelayers.net/themes/houzing-html/images/property/ep3.jpg"
        background_alt="studio.jpg"
        icon_alt="studio.png"
      ></ExploreOurPropertiesCard>
    </HomepageSection>
  </Container>
);

export default ExploreOurProperties;
