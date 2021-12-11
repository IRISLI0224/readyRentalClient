import React from 'react';

class PropertyDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Property details</h2>
        <div className="Property">
          <img src="" alt="" />
          <div className="address">
            <p className="address-street">20 Gun Street</p>
            <p className="address-rest">Underbridge Qld 4655</p>
          </div>
          <div className="feature"></div>
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
