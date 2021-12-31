import React from 'react';
import EditBar from './component/EditBar';
import PropertyDetail from './component/PropertyDetail';
import PropTypes from 'prop-types';

const PropertyDetailEditable = ({ property }) => {
  return (
    <div>
      <PropertyDetail property={property} />
      <EditBar property={property} />
    </div>
  );
};

PropertyDetailEditable.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetailEditable;
