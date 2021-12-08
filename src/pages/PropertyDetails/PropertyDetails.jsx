import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  color:grey
`;

const PropertyDetails = () =>
{
  const params=useParams();
    return (  <Container >  
      <h1>{params.id}</h1>
    </Container>);
};

export default PropertyDetails;