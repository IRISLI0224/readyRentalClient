// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo'

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #333f48;
  color: #fff;
  word-wrap: break-word;
`;

const NavigationBar = () => (
  <Container>
    Here is footer
  </Container>
);

export default NavigationBar;