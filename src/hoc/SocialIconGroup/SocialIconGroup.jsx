// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledSocialIcon = styled.a`
  border: 1px solid transparent;
  border-radius: 50%;
  height: 2.3rem;
  width: 2.3rem;
  padding: 8px;
  margin: 5px;
  color: #1d2327;
  background-color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
  }
`;

const FaceBook = styled(StyledSocialIcon)`
  &:hover {
    background-color: rgb(66, 103, 178);
  }
`;
const Twitter = styled(StyledSocialIcon)`
  &:hover {
    background-color: rgb(29, 161, 242);
  }
`;
const Pinterest = styled(StyledSocialIcon)`
  &:hover {
    background-color: rgb(230, 0, 35);
  }
`;
const Linkedin = styled(StyledSocialIcon)`
  &:hover {
    background-color: rgb(14, 118, 168);
  }
`;
const Youtube = styled(StyledSocialIcon)`
  &:hover {
    background-color: rgb(255, 0, 0);
  }
`;

export { FaceBook, Twitter, Pinterest, Linkedin, Youtube };
