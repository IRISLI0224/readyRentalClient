import React from 'react';
import styled from 'styled-components';
import Button from '../../hoc/Button';

const Container = styled.div`
  width: 200px;
  max-height: 200px;
  vertical-align: top;
  margin-left: 2px;
  padding: 14px 18px 21px;
  box-sizing: border-box;
  border-radius: 3px;
  -webkit-transition: background-color 0.3s ease;
  -moz-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
  -ms-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  background-color: rgba(0, 0, 0, 0.4);
  height: 200px;
  margin-left: 12px;
  margin-right: 50px;
  text-align: left;
  h2 {
    font-size: 1.2rem;
  }
`;

const NextSearchBar = () => (
  <Container>
    <h2>Need a tenant?</h2>
    <p>Find a property manager to help, or list yourself</p>
    <Button className="primary" size="100%">
      Get Started
    </Button>
  </Container>
);

export default NextSearchBar;
