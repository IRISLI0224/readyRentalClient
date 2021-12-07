import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
  border-radius: 0.1875rem;
  background-color: var(--ck-backgroundPrimaryLow);
  height:640px;
  width:600px;
`;



const PropertyCard = ({PropertyInfo},{key}) => {
  const link="property/"+PropertyInfo._id;
  return(
    <Link to={link}>
      <Container >
        <br/>
        {key}
        <br/>
          Here is Property card for {PropertyInfo.city}
        <br/>
        Here is description : {PropertyInfo.description}
        <br/>
        Postcode: {PropertyInfo.postCode}
     </Container>
    </Link>
  );
};

export default PropertyCard;