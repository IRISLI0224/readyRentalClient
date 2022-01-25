import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';
import { getToken } from '../../../utils/authentication';
import Dropdown from '../../../components/Dropdown';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #fff;
  word-wrap: break-word;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  height: 100px;
  @media (max-width: 992px) {
    padding: 2rem 5rem 0.5rem 5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 2rem 1rem 0.5rem 1rem;
    Button {
      margin-left: 3px;
      size: 20%;
    }
  }
  @media (max-width: 576px) {
    background-image: none;
  }
`;

const Space = styled.div`
  width: 54%;
`;
const SpaceLogin = styled.div`
  width: 67%;
`;

const ButtonWithoutBorder = styled(ButtonStyle)`
  color: #fff;
  border: none;
  height: 40px;
  &:hover {
    color: #fff;
  }
  @media (max-width: 576px) {
    color: rgba(0, 0, 0, 0.85);
    padding: 0.3125rem 0.75rem;
    font-weight: 500;
  }
`;

const ButtonWhitFont = styled(ButtonStyle)`
  color: #fff;
  height: 40px;
  border: 2px solid #e5e8ec;
  &:hover {
    background-color: #fff;
  }
  @media (max-width: 576px) {
    border: none;
    background: #0061df;
    padding: 0.3125rem 0.75rem;
    font-weight: 500;
    margin-right: 1rem;
  }
`;

const NavbarPanel = styled.div`
  margin: auto;
  width: 1177px;
  max-width: 1177px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1350px) {
    width: 88%;
    max-width: 88%;
    margin: auto;
  }
`;

const ButtonPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

const NavigationBar = () => {
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) setLogin(true);
  }, []);

  return (
    <Container>
      <NavbarPanel>
        <Logo className="Logo" />
        {Login ? <SpaceLogin /> : <Space />}
        {Login ? (
          <>
            <Dropdown />{' '}
          </>
        ) : (
          <ButtonPanel>
            <Link to="/login">
              <ButtonWithoutBorder className="SigninButton" size="90px">
                Sign in
              </ButtonWithoutBorder>
            </Link>
            <Link to="/join">
              <ButtonWhitFont className="JoinButton" size="90px">
                &nbsp;&nbsp;Join&nbsp;&nbsp;
              </ButtonWhitFont>
            </Link>
          </ButtonPanel>
        )}
      </NavbarPanel>
    </Container>
  );
};

export default NavigationBar;
