import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BasicInfo from './components/BasicInfo';
import Description from './components/Description/Description';
import {getPropertiesById} from '../../config/Properties'
import ContactForm from './components/ContactForm/ContactForm';

const PropertyDetails = () => {
  const params = useParams();
  const id = params.id.toString();
  const [property,setProperty]=useState([]);

  useEffect(()=>{
    SetPropertiesById(id);
  },[])

  const SetPropertiesById=async(id)=>{
    const res = await getPropertiesById(id);
    if(res) setProperty(res);
  }

  return (
    <>
      <h1>{property.city}</h1>
      <BasicInfo property={property}/>
      <Description property={property}/>
      <ContactForm property={property}/>
    </>
  );
};

export default PropertyDetails;
