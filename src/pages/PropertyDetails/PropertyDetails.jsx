import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BasicInfo from './components/BasicInfo';
import Description from './components/Description/Description';
import { getPropertiesById } from '../../config/Properties';
import ContactForm from './components/ContactForm/ContactForm';
import CardAds from '../../components/ListCardAds/CardAds';
import StyledText from '../.../../../hoc/Text/';
import { DescItemRe } from './components/Container/Container';
import styled from 'styled-components';
import { Divider } from 'antd';
import Map from '../../components/Map';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
    flex-wrap: nowrap;
    flex-direction: row;
}
  @media (min-width: 641px) {
    border-radius: 0.1875rem;
  }
`;

const MapContainer = styled.div`
    margin-left:200px;
}
  @media (min-width: 641px) {
    border-radius: 0.1875rem;
  }
`;

const Blank = styled.div`
  width: 350px;
  @media (min-width: 641px) {
    border-radius: 0.1875rem;
  }
`;

const PropBody = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 60%;
`;

const Ads = styled.div` 
    margin-top :50px;
    margin-left:50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-content: flex-end;
    -ms-flex-line-pack: end;
    align-content: stretch;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    align-items: stretch;
    flex-direction: column;
}
}
  @media (min-width: 641px) {
    border-radius: 0.1875rem;
  }
  @media screen and (max-width: 1024px) {
    display: none;
}
`;

const PropertyDetails = () => {
  const params = useParams();
  const id = params.id.toString();
  const [property, setProperty] = useState([]);
  const [add, setAdd] = useState();

  useEffect(() => {
    SetPropertiesById(id);
  });

  useEffect(() => {
    const P = property;
    const add =
      P.address?.streetNumber +
      ' ' +
      P.address?.streetName +
      ' ' +
      P.address?.city +
      ' ' +
      P.address?.state +
      ' ' +
      P.address?.postCode;
    setAdd(add);
  }, [property]);

  //Scroll to top after jump to detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SetPropertiesById = async (id) => {
    const res = await getPropertiesById(id);
    if (res) {
      setProperty(res);
    }
  };

  return (
    <>
      <h1>{property.city}</h1>
      <BasicInfo property={property} />
      <FormContainer>
        <Description property={property} />
        <Blank></Blank>
      </FormContainer>
      <MapContainer>{add?.indexOf('undefined') < 0 ? <Map add={add} /> : null}</MapContainer>
      <FormContainer>
        <ContactForm id={id} property={property} />
      </FormContainer>
      <Divider style={{ background: '#bdbdbd' }} />
      <DescItemRe>
        <StyledText size="0.7rem" style={{ marginTop: 10 }}>
          Personal Information Collection Statement
        </StyledText>
        <StyledText size="0.7rem">
          Your personal information and associated behavioural data related to search activities
          will be passed to the Agency and/or its authorised service provider to assist the Agency
          to contact you about your property enquiry. They are required not to use your information
          for any other purpose. Our Privacy policy explains how we store personal information and
          how you may access, correct or complain about the handling of personal information.
        </StyledText>
        <StyledText size="0.7rem" style={{ marginBottom: 50 }}>
          This form is only to be used for sending genuine email enquiries to the Agent. We reserves
          its right to take any legal or other appropriate action in relation to misuse of this
          service.
        </StyledText>
      </DescItemRe>
      {/* <Ads>
          <StyledText size="1.5rem">Similar Properties</StyledText>
          <br />
          <CardAds props={property}></CardAds>
          <br />
          <CardAds props={property}></CardAds>
        </Ads> */}
    </>
  );
};

export default PropertyDetails;
