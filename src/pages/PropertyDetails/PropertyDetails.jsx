import React from 'react';
import { useParams } from 'react-router';
import BasicInfo from './components/BasicInfo';
import Description from './components/Description/Description';

const PropertyDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>{params.id}</h1>
      <BasicInfo />
      <Description />
    </>
  );
};

export default PropertyDetails;
