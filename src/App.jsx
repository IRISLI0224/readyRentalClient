// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Header from './app/Header';
import Footer from './app/Footer';
//import Login from './pages/Login';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import PropertyDetail from './pages/PropertyDetail/PropertyDetail';

const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>

      <Header />
      <Home/>
      <PropertyDetail />
      {/*<Login />*/}
      <Footer />

    </ThemeProvider>
  </>
);

export default App;
