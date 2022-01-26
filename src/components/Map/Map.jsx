import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip} from 'react-leaflet';
import { customMarker } from "./constants";
import "leaflet/dist/leaflet.css";

const myFunction=(arr)=>
{
 var out = "<br />";
 var i;

 if(arr.length > 0)
 {
  for(i = 0; i < arr.length; i++)
  {
   out += "<div class='address' title='Show Location and Coordinates' onclick='chooseAddr(" + arr[i].lat + ", " + arr[i].lon + ");return false;'>" + arr[i].display_name + "</div>";
  }
  document.getElementById('results').innerHTML = out;
 }
 else
 {
  document.getElementById('results').innerHTML = "Sorry, no results...";
 }

}

const addr_search=(addr)=>
{
 var inp = document.getElementById("addr");
 var xmlhttp = new XMLHttpRequest();
 var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + inp.value;
 xmlhttp.onreadystatechange = function()
 {
   if (this.readyState == 4 && this.status == 200)
   {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
   }
 };
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
}

const Map = (property) => {
  
  // //const add = {...address}
  // let add =address.address;
  // let adds ='';
  // if (add!=undefined){
  //   address.map((a)=>{
  //     console.log(a)
  //     adds =adds+a;
  //   })
  // }
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
  //const add = address.streetNumber+' '+address.streetName+' '+address.city+' '+address.state+' '+ address.postCode;
  console.log(P.address?.streetNumber)
  return (
    <div>
      <MapContainer
        style={{ height: '480px', width: '800px' }}
        zoom='15'
        center={[-33.86013359152855, 151.24803202610013]}
        scrollWheelZoom={true}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
            <Marker style={{ color: 'red' }}  position={[-33.86013359152855, 151.24803202610013]} icon={customMarker} >
              <Tooltip direction="top" offset={[10, 0]}>
                <span style={{ fontSize: 14, fontWeight: 'bold' }}>Location</span>
              </Tooltip>
            </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
