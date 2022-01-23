import React from 'react';
import EditBar from './component/EditBar';
import PropertyDetail from './component/PropertyDetail';
import PropTypes from 'prop-types';

const PropertyDetailEditable = ({ property, onDelete, isListing }) => {
  return (
    <div>
      <PropertyDetail property={property} />
      <EditBar property={property} onDelete={onDelete} isListing={isListing} />
    </div>
  );
};

PropertyDetailEditable.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetailEditable;
