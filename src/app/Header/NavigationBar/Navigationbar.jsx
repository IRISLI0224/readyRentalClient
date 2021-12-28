import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';
import { getToken } from '../../../utils/authentication';
import Dropdown from '../../../components/Dropdown';

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 9%;
  padding-right: 10%;
  color: #fff;
  word-wrap: break-word;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  height: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-left: 5%;
    padding-bottom: 0;
    Button {
      margin-left: 3px;
      size: 20%;
    }
    border-bottom: 0.1rem solid red;
  }
`;

const Space = styled.div`
  width: 55.5%;
`;
const SpaceLogin = styled.div`
  width:68%;
`;

const ButtonwithoutBorder = styled(ButtonStyle)`
  color: #fff;
  border: none;
  height: 40px;
`;

const ButtonWhitFont = styled(ButtonStyle)`
  color: #fff;
  height: 40px;
  &:hover {
    background-color: #fff;
  }
`;

const NavigationBar = () => {
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) setLogin(true);
  }, []);

  return (
    <Container>
      <Logo className="Logo" />
      {Login?<SpaceLogin/>:<Space/>}
      {Login ? (
        <>
          <Dropdown />{' '}
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
            <ButtonwithoutBorder className="SigninButton" size="90px">
              Sign in
            </ButtonwithoutBorder>
          </Link>
          <Link to="/join" style={{ color: 'white', textDecoration: 'none' }}>
            <ButtonWhitFont className="JoinButton" size="90px">
              &nbsp;&nbsp;Join&nbsp;&nbsp;
            </ButtonWhitFont>
          </Link>
        </>
      )}
    </Container>
  );
};

export default NavigationBar;
