import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from '../../../../hoc/Button';
import img from '../../../../assets/img/bottembanner.png';
import { RRColors } from '../../../../utils/constants';

const Container = styled.div`
  height: 300px;
  position: relative;
  background-image: url(${img});
  @media (max-width: 768px) {
    display: none;
  }
`;

const DownloadAPP = styled.div`
  position: relative;
  margin-bottom: -400px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-weight: 600;
  line-height: 2.375rem;
  margin-bottom: 15px;
`;

const ButtonWhite = styled(ButtonStyle)`
  color: ${RRColors.themeBlue};
  background: #fff;
  //border: none;
  height: 50px;
  &:hover {
    color: #fff;
    background: transparent;
    border-color: #fff;
    border: 1px solid;
  }
`;

const BottomBanner = () => {
  return (
    <Container>
      <DownloadAPP>
        <br />
        <br />
        <br />
        <Title style={{ color: 'white' }}>Need a tenant?</Title>
        <h1 style={{ color: 'white' }}>Find a property manager to help, or list yourself </h1>
        <br />
        <ButtonWhite primary size="15%" height="50px" as="a" href="/join">
          REGISTER NOW
        </ButtonWhite>
      </DownloadAPP>
    </Container>
  );
};

export default BottomBanner;
