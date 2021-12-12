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

const Buttonwithoutborder = styled(Button)`
   color:#fff;
   border:none;  
`;

const NavigationBar = () => (
  <Container>
    <Logo className="Logo" />
    <Space />
    <Link to="/login">
    <Buttonwithoutborder className="SigninButton" size='90px' >Sign in</Buttonwithoutborder>
    </Link>
    <Link to='/join'>
      <Button className="JoinButton" size='90px' style={{}}>
        &nbsp;&nbsp;Join&nbsp;&nbsp;
      </Button>
    </Link>
  </Container>
);

export default NavigationBar;
