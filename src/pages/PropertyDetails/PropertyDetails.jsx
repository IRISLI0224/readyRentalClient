import React from 'react';
import { useParams } from 'react-router';
import { BasicInfo } from './components/BasicInfo';

const PropertyDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>{params.id}</h1>
      <BasicInfo />
    </>
  );
};

export default PropertyDetails;
