import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 300;
  margin: 0px 0px 0px 0.25rem;
  border-top: 1px solid rgb(210, 213, 218);
  border-bottom: 1px solid rgb(210, 213, 218);
  padding: 0.75rem;
`;

const PropertyHeader = () => {
  return (
    <Wrapper>
      <span>Property details</span>
      <span>Listing status</span>
      <span>Email enquiries</span>
    </Wrapper>
  );
};

export default PropertyHeader;
