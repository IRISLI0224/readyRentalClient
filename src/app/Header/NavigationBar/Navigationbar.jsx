import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';
import { getToken } from '../../../utils/authentication';
import Dropdown from '../../../components/Dropdown';
import { useSelector } from 'react-redux';

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
  }
  @media (max-width: 576px) {
    background-image: none;
  }
`;

const Space = styled.div`
  width: 55.5%;
`;
const SpaceLogin = styled.div`
  width: 68%;
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

const IconEmail = styled.div`
  display: flex;
  width: 55.5%;
`;

const Email = styled.div`
  margin-left: 40%;
  margin-top: 1.2rem;
  @media (max-width: 576px) {
    display: none;
  }
`;

const NavigationBar = () => {
  const [Login, setLogin] = useState(false);
  const user = useSelector((state) => state);

  useEffect(() => {
    const token = getToken();
    if (token) setLogin(true);
  }, []);

  return (
    <Container>
      <Logo className="Logo" />
      {Login ? <SpaceLogin /> : <Space />}
      {Login ? (
        <>
          <IconEmail>
            <Email>{user.email}</Email>
            <Dropdown />{' '}
          </IconEmail>
        </>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default NavigationBar;
