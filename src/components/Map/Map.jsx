import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MapContainer, Marker, TileLayer, Popup ,Tooltip} from 'react-leaflet';
import { customMarker } from "./constants";

import "leaflet/dist/leaflet.css";


const Map = () => {
  return (
    <div>
      <MapContainer
        style={{ height: '480px', width: '800px' }}
        zoom='13'
        center={[-33.86013359152855, 151.24803202610013]}
        scrollWheelZoom={true}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
            <Marker style={{ color: 'red' }}  position={[-33.86013359152855, 151.24803202610013]} icon={customMarker} >
              <Tooltip direction="top" offset={[10, 0]}>
                <span style={{ fontSize: 14, fontWeight: 'bold' }}>aaaa</span>
              </Tooltip>
            </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
