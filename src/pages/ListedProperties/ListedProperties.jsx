import React from 'react';
// import styled from 'styled-components';
import EditBar from './component/EditBar';
import PropertyDetail from './component/PropertyDetail';

class ListedProperties extends React.Component {
  render() {
    return (
      <div>
        <PropertyDetail />
        <EditBar />
      </div>
    );
  }
}

export default ListedProperties;
