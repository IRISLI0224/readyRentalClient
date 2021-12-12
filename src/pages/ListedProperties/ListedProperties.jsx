import React from 'react';
import Button from '../../hoc/Button';
import styled from 'styled-components';
import PropertyDetailEditable from './component/PropertyDetailEditable';
import PropertyHeader from './component/PropertyHeader';
import { NoShadowWrapper } from './component/Wrapper';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
class ListedProperties extends React.Component {
  render() {
    return (
      <Container>
        <NoShadowWrapper>
          <h1>My Listings</h1>
          <Button as="a" href="https://www.google.com/" size="140px" height="50px" primary>
            +Create Listing
          </Button>
        </NoShadowWrapper>
        <PropertyHeader />
        <PropertyDetailEditable />
      </Container>
    );
  }
}

export default ListedProperties;
