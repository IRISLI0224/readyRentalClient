import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';
import { getToken } from '../../../utils/authentication';
import Dropdown from '../../../components/Dropdown';
import LogoResponsive from '../../../assests/img/logo_red.svg';
import TitleResponsive from '../../../assests/img/title2.png';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #fff;
  word-wrap: break-word;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  height: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-image: none;
    Button {
      margin-left: 3px;
      size: 20%;
    }
    .Logo {
      display: none;
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
  flex-grow: 1;
`;

const ButtonWithoutBorder = styled(ButtonStyle)`
  color: #fff;
  border: none;
  height: 40px;
  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    border: none;
    background: #0061df;
    padding: 0.3125rem 0.75rem;
    font-weight: 500;
  }
`;

const NavbarPanel = styled.div`
  width: 1177px;
  max-width: 1177px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1350px) {
    width: 88%;
    max-width: 88%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const LogoResponsiveBox = styled.a`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  width: 40px;
`;

const TitleImg = styled.img`
  width: 200px;
  margin-left: 10px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const NavigationBar = () => {
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) setLogin(true);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <NavbarPanel>
          <Logo className="Logo" />
          <LogoResponsiveBox>
            <LogoImg src={LogoResponsive} />
            <TitleImg src={TitleResponsive} />
          </LogoResponsiveBox>
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
    </React.Fragment>
  );
};

export default NavigationBar;
