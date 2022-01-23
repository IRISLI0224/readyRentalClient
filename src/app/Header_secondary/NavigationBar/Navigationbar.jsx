import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';
import Logo from '../../../assests/img/logo_red.svg';
import { getToken } from '../../../utils/authentication';
import Dropdown from '../../../components/Dropdown';
import { useSelector } from 'react-redux';
import title from '../../../assests/img/title2.png';

const Container = styled.div`
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  height: 4.5rem;
  //border: 1px solid #a3a3a3;
  padding: 1rem 0.5rem;
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
  width: 15%;
`;

const SpaceLogin = styled.div`
  width: 0%;
`;

const ButtonwithoutBorder = styled(ButtonStyle)`
  color: #3f3f3f;
  border: none;
  height: 40px;
  @media (max-width: 576px) {
    color: rgba(0, 0, 0, 0.85);
    padding: 0.3125rem 0.75rem;
    font-weight: 500;
  }
`;

const LogoPanel = styled.div`
  text-align: center;
  width: 800px;
`;

const IconEmail = styled.div`
  display: flex;
  width: 55.5%;
`;

const Email = styled.div`
  margin-left: 40%;
  color: gray;
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
      {Login ? <SpaceLogin /> : <Space />}
      <a href="/">
        <LogoPanel>
          <img src={Logo} style={{ height: '50px' }} />
          <img src={title} style={{ height: '40px', marginLeft: '10px' }} />
        </LogoPanel>
      </a>
      {Login ? (
        <>
          {' '}
          <IconEmail>
            <Email>{user.email}</Email>
            <Dropdown />{' '}
          </IconEmail>
        </>
      ) : (
        <>
          {' '}
          <Link to="/login" primary style={{ textDecoration: 'none' }}>
            <ButtonwithoutBorder className="SigninButton" size="90px">
              Sign in
            </ButtonwithoutBorder>
          </Link>
          <Link to="/join" style={{ textDecoration: 'none' }}>
            <Button className="JoinButton" size="80px" primary>
              &nbsp;&nbsp;Join&nbsp;&nbsp;
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default NavigationBar;
