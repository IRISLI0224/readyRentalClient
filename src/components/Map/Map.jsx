import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { customMarker } from './constants';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';


const Map = (add) => {
  const [lat, setLat] = useState(-33.86013359152855);
  const [lan, setLan] = useState(151.24803202610013);
  const address =add;
  const [zoom, setZoom]=useState(14)

  useEffect(() => {
    add_search(add);
  });

  const add_search = async (add) => {
    console.log(add)
    if (add.add.indexOf('undefined') < 0) {
      var url = 'https://nominatim.openstreetmap.org/search?format=json&limit=3&q=' + add.add;
      console.log(url)
      const location = await axios.get(url);
      if (location.status == '200') {
        console.log(location.data[0].boundingbox[0]);
        setLat(location.data[0].boundingbox[0]);
        setLan(location.data[0].boundingbox[2]);
      }
    }
  };

  const handleClick=()=>{
     setZoom(15)
  }

  return (
    <div>
      <MapContainer
        style={{ height: '300px', width: '800px' }}
        zoom={zoom}
        center={[lat, lan]}
        position={[lat, lan]}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          style={{ color: 'red' }}
          position={[lat, lan]}
          icon={customMarker}
          onClick={handleClick}
          visible ='false'
        >
          <Tooltip direction="top"  >
            <span style={{ fontSize: 14, fontWeight: 'bold' }} >{address.add}</span>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
