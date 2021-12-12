import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BasicInfo from './components/BasicInfo';
import Description from './components/Description/Description';
import {getPropertiesById} from '../../config/properties'

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
      <BasicInfo />
      <Description />
    </>
  );
};

export default PropertyDetails;
