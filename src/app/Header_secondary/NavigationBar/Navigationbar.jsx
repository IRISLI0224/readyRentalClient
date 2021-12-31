import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonStyle } from '../../../hoc/Button';
import { Link } from 'react-router-dom';
import Logo from '../../../assests/img/logo_red.svg';
import { getToken } from '../../../utils/authentication';
import Dropdown from '../../../components/Dropdown';

const Container = styled.div`
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  padding: 1rem 0.5rem;
  height: 4.5rem;
  border: 1px solid #a3a3a3;
  padding: 1rem 0.5rem;
`;

const Space = styled.div`
  width: 15%;
`;

const SpaceLogin = styled.div`
  width:0%;
`;

const ButtonwithoutBorder = styled(ButtonStyle)`
  color: #3f3f3f;
  border: none;
  height: 40px;
`;

const LogoPanel = styled.div`
  text-align: center;
  width: 800px;
`;

const NavigationBar = () => {
  const [Login, setLogin] = useState(false);
  useEffect(() => {
    const token = getToken();
    //console.log(token)
    if (token) setLogin(true);
  }, []);

  return (
    <Container>
      {Login?<SpaceLogin/>:<Space/>}
      <LogoPanel>
        <img src={Logo} style={{ height: '40px' }} />
      </LogoPanel>
      {Login ? (
        <>
          {' '}
          <Dropdown />
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
