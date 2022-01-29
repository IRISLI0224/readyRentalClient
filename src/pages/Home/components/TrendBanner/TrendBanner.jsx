import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../hoc/Button';

const Container = styled.div`
  //height: 500px;
  /* margin-bottom: 30px; */
  position: relative;
  margin-top: 150px;
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

const TrendBanner = () => {
  return (
    <Container>
      <DownloadAPP>
        <br />
        <br />
        <br />
        <h2 style={{ color: 'white' }}>Finding Property?</h2>
        <h1 style={{ color: 'white' }}>Find the most popular property in your area </h1>
        <h1 style={{ color: 'white' }}>Find a property manager to help</h1>
        <br />
        <Button primary size="15%" height="50px" as="a" href="/search?">
          Explore Now
        </Button>
      </DownloadAPP>
      <video
        src="https://buggodie-my-upload.s3.ap-southeast-2.amazonaws.com/Street.mp4"
        type="video/mp4"
        muted
        autoPlay={'autoplay'}
        loop
        style={{
          minwidth: '100%',
          minHeight: '100px',
          height: 'auto',
          width: '100%',
          zIndex: '-11',
        }}
      ></video>
    </Container>
  );
};

export default TrendBanner;
