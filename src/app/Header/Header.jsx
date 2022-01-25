import React from 'react';
import styled from 'styled-components';
import background from '../../assests/video/night.mp4';
import NextSearchBar from '../../components/NextSearchBar';
import SearchBar from '../../components/SearchBar';
import NavigationBar from './NavigationBar/Navigationbar';
import phone from '../../assests/img/phone.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
  height: 600px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  background: url(${({ img }) => img}) no-repeat center;
  @media (max-width: 768px) {
    height: ${({ height }) => height}rem;
    width: 100%;
    background: none;
  }
  @media (max-width: 576px) {
    height: 60px;
    width: 100%;
    background: none;
  }
`;

const SearchBarPanel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

const DownloadAPP = styled.div`
  margin-top: 110px;
`;

const Header = () => (
  <Container className="Header" height={5}>
    <video
      src={background}
      type="video/mp4"
      muted
      autoPlay={'autoplay'}
      loop
      style={{
        position: 'fixed',
        right: '0px',
        bottom: '0px',
        minwidth: '100%',
        minHeight: '100%',
        height: 'auto',
        width: '100%',
        zIndex: '-11',
        //opacity: '80%',
        //filter: 'brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25)',
        //filter: 'brightness(0.9) contrast(1.1)'
      }}
    ></video>
    <NavigationBar />
    <SearchBarPanel>
      <SearchBar />
      <NextSearchBar />
    </SearchBarPanel>
    <DownloadAPP>
      <img src={phone} alt="phone"></img>
      <br />
      <br />
      <h3 style={{ color: 'white' }}>Download Our App</h3>
    </DownloadAPP>
  </Container>
);

export default Header;
