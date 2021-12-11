import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

class PropertyDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="Property">
          <img
            src="https://argonaut.au.reastatic.net/consumer-list/prod/pll-dashboard/iconHousePlaceholder-b6ccfc15da9c0dcaa97b3c752f58b0b2.svg"
            alt=""
          />
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
