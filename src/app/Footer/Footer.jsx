// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import SocialIconGroup from '../../components/hoc/SocialIconGroup';

const Container = styled.div`
  width: 100vw;
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #333f48;
  color: #fff;
  word-wrap: break-word;
`;

const Footer = () => (
  <Container>
    <SocialIconGroup />
    Here is footer
  </Container>
);

export default Footer;
