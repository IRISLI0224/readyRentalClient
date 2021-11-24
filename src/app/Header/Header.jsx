import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: ${({ height }) => height}rem;
  background-color: #333f48;
  text-align: center;
  color:white;
  @media (max-width: 768px) {
    height: ${({ height }) => height + 2}rem;
  }
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
`;



const Header = (props) => (
  <Container height={12}>
     Here is header
  </Container>
);

export default Header;