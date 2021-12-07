// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import {
  FaceBook,
  Twitter,
  Pinterest,
  Linkedin,
  Youtube,
} from '../../hoc/SocialIconGroup';
import { FaPinterestP, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import Item from './component/Item/';

const Container = styled.div`
  width: 100vw;
  padding-bottom: 3rem;
  padding-top: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #333f48;
  color: #fff;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = () => (
  <Container>
    <IconWrap>
      <FaceBook href="https://www.facebook.com/">
        <FaFacebookF />
      </FaceBook>
      <Twitter href="https://twitter.com/">
        <BsTwitter />
      </Twitter>
      <Pinterest href="https://pinterest.com/">
        <FaPinterestP />
      </Pinterest>
      <Linkedin href="https://linkedin.com/">
        <ImLinkedin2 />
      </Linkedin>
      <Youtube href="https://youtube.com/">
        <FaYoutube />
      </Youtube>
    </IconWrap>
    <ListWrap>
      <Item>About us</Item>
      <Item>Legal</Item>
      <Item>Privacy</Item>
    </ListWrap>
  </Container>
);

export default Footer;
