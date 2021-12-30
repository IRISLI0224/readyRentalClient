import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BasicInfo from './components/BasicInfo';
import Description from './components/Description/Description';
import {getPropertiesById} from '../../config/Properties'
import ContactForm from './components/ContactForm/ContactForm';
import axios from 'axios';

const PropertyDetails = () => {
  const params = useParams();
  const id = params.id.toString();
  const [Property,setProperty]=useState([]);


  useEffect(()=>{
    SetPropertiesById(id);
  },[])

  const SetPropertiesById=async(id)=>{
    const res = await getPropertiesById(id);
    if(res) setProperty(res);
  }

  return (
    <>
      <h1>{Property.city}</h1>
      <BasicInfo Property={Property}/>
      <Description Property={Property}/>
      <ContactForm/>

    </>
  );
};

export default PropertyDetails;
