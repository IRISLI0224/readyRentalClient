import React from 'react';
import Button from '../../hoc/Button';
// import styled from 'styled-components';
import EditBar from './component/EditBar';
import PropertyDetail from './component/PropertyDetail';
import PropertyHeader from './component/PropertyHeader';

class ListedProperties extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>My Listings</h1>
          <Button as="a" href="https://www.google.com/" size="140px" className="primary">
            +Create Listing
          </Button>
        </div>
        <PropertyHeader />
        <PropertyDetail />
        <EditBar />
      </div>
    );
  }
}

export default ListedProperties;
