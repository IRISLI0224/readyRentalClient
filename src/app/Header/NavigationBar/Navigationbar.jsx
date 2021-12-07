import React from 'react';
import styled from 'styled-components';
import Logo from './Logo'
import Button from '../../../hoc/Button'
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 10%;
  padding-right: 10%;
  color: #fff;
  word-wrap: break-word;
  height: 60px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  height: 100px;
`;

const Space = styled.div`
  width: 55%;
`;

const buttonstyle = {
  root: {
    color: 'white',
    width: '100px',
    height: '40px',
  },
};

const NavigationBar = () => (
  <Container>
    <Logo className="Logo" />
    <Space />
    <div style={buttonstyle.root}>
    <Link to="/login">
    <Button className="SigninButton" >Sign in</Button>
    </Link>
    </div>
    <Link to='/join'>
    <div style={buttonstyle.root}>
      <Button className="JoinButton" style="color:blue;margin-left:20px;">
        &nbsp;&nbsp;Join&nbsp;&nbsp;
      </Button>
    </div>
    </Link>
  </Container>
);

export default NavigationBar;
