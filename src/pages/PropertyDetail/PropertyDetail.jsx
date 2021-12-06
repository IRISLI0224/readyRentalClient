import React from 'react';
import styled from 'styled-components';
import image1 from './image/1.jpg';

const PropertyImage = styled.div`
  background-image: url(${image1});
`;

const BasicInfo = () => {
  <>
    <PropertyImage />
  </>;
};

const PropertyDetail = () => {
  <>
    <BasicInfo />
  </>;
};

export default PropertyDetail;
