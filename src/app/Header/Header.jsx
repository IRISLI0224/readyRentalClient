import React from 'react';
import styled from 'styled-components';
import NextSearchBar from '../../components/NextSearchBar';
import SearchBar from '../../components/SearchBar';
import NavigationBar from './NavigationBar/Navigationbar';
import phone from '../../assets/img/phone.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
  height: 600px;
  background: url(${({ img }) => img}) no-repeat center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  @media (max-width: 768px) {
    height: ${({ height }) => height}rem;
    width: 100%;
  }
  video {
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -11;
    @media (max-width: 768px) {
      display: none;
    }
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => (
  <React.Fragment>
    <Container className="Header" height={5}>
      <video
        src="https://buggodie-my-upload.s3.ap-southeast-2.amazonaws.com/night.mp4"
        type="video/mp4"
        muted
        autoPlay={'autoplay'}
        loop
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
  </React.Fragment>
);

export default Header;
