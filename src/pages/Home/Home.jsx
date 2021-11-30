import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  overflow: hidden;
  width: 45rem;
  height: 42rem;
  border-radius: 4rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
`;


const Home = () => (
  <Container>
     Here is home page.
  </Container>
);

export default Home;