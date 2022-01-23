import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import styled from 'styled-components';
// // import ReactMapGL, { Marker } from 'react-map-gl';
// import { MapContainer, Marker } from 'react-leaflet';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaXJpc2xpMDIyNCIsImEiOiJja3lwZzNocGEwOXFvMm5wYzRjZHgybHo3In0.1LshOU1AnVpBGZKdxRkyfw';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(151.24803202610013);
  const [lat, setLat] = useState(-33.86013359152855);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

//   const [viewport, setViewport] = React.useState({
//     longitude: 151.24803202610013,
//     latitude: -33.86013359152855,
//     zoom: 14,
//   });

  return (
    <div>
      {/* <MapContainer
        center={[-33.86013359152855, 151.24803202610013]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '800px', height: '300px', zIndex: 0 }}
        //className={className}
        animate={true}
      >
        <Marker position={[-33.86013359152855, 151.24803202610013]}>
          <div>You are here</div>
        </Marker>
      </MapContainer> */}
      <div ref={mapContainer} className="map-container" style={{width:'750px',height:'300px'}}/>
    </div>
  );
};

export default Map;
