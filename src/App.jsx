// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Header from './app/Header';
import Footer from './app/Footer';
// import Login from './pages/Login';
// import { createGlobalStyle } from 'styled-components';
import Card from './Component/Card';

import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import Slider from './Component/Slider'
import { SliderData } from './Component/Slider/SliderData';


const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>

      <Header />
      {/* <Home/> */}
      {/* <Login /> */}
      <Card brand = '.\props\brand.PNG' agentName='Michael Edwards' 
      agentIcon='.\props\agent-pic.PNG' propImg='props\props.PNG' 
      price='$800' address='2/5 Temple Street, Victoria Park' bedNum='4'
      bathNum = '2' carNum = '2' typeProp='House'
      />
      <GlobalStyle />
      <Footer />

    </ThemeProvider>
  </>
);

export default App;
