import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const URL="http://localhost:3000"

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

const Layout = ({ children,url}) => {
 
  //const { history } = this.props;
  const url = window.location.href.replace(URL,"");
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

export default Layout;
