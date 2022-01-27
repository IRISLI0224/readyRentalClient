import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { customMarker } from './constants';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const Map = ({add,height,width}) => {
  const [lat, setLat] = useState();
  const [lan, setLan] = useState();
  const address = add;
  const [zoom, setZoom] = useState(15);


  useEffect(() => {
    add_search(add);
  }, []);

  console.log(height)

  const add_search = async (add) => {
    if (add.indexOf('undefined') < 0) {
      var url = 'https://nominatim.openstreetmap.org/search?format=json&limit=3&q=' + add;
      const location = await axios.get(url);
      if (location.data != []) {
        if (location?.data[0]?.boundingbox[0]) setLat(location?.data[0]?.boundingbox[0]);
        if (location?.data[0]?.boundingbox[2]) setLan(location?.data[0]?.boundingbox[2]);
      }
    }
  };

  const handleClick = () => {
    setZoom(15);
  };

  return (
    <div>
      {lat != undefined && lan != undefined ? (
        <MapContainer
          style={{ height:`${height}`, width:`${width}` }}
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
            visible="false"
          >
            <Tooltip direction="top">
              <span style={{ fontSize: 14, fontWeight: 'bold' }}>{address.add}</span>
            </Tooltip>
          </Marker>
        </MapContainer>
      ) : (
        <MapContainer
          style={{ height:`${height}`, width:`${width}` }}
          zoom='3'
          center={[-33.870453,  151.208755]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
