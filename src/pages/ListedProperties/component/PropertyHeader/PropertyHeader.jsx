import React from 'react';
import styled from 'styled-components';
import SpanText from '../SpanText/SpanText';
import { Wrapper } from '../Wrapper';

const HeaderWrapper = styled(Wrapper)`
  margin: 0 0 0.35rem 0;
  border-top: 1px solid rgb(210, 213, 218);
  border-bottom: 1px solid rgb(210, 213, 218);
`;

const PropertyHeader = () => {
  return (
    <HeaderWrapper>
      <SpanText>Property details</SpanText>
    </HeaderWrapper>
  );
};

export default PropertyHeader;
