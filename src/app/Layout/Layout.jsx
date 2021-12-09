import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from "react-router-dom";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;

  ${(props) =>
    ({
      user: css`
        min-height: 100vh;
      `,
    }[props.variant])}
`;

//change layout via for different pathname
const Layout = ({ children }) => {
  let location = useLocation();
  const url = location.pathname;
  const specialCases = {
    '/': 'A',
    '/join': 'B',
    '/login': 'B',
    '/property': 'C',
  };

  const specialCase = specialCases[url];
  if (specialCase === 'A') {
    return (
      <>
        <Header />
        <Main >{children}</Main>
        <Footer />
      </>
    );
  }
  if (specialCase === 'B') {
    return (
      <>
        <Main >{children}</Main>
      </>
    );
  }
  if (specialCase === 'C') {
    return (
      <>
       <div>url</div>
        <Main>
          {children}
        </Main>

      </>
    );
  }
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};


export default (Layout);
