// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Header from './app/Header';
import Footer from './app/Footer';
import { createGlobalStyle } from 'styled-components';
import Card from './component/ListCard';

import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';



const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <Card brand = '.\experimental_img\brand.PNG' agentName='Michael Edwards' 
      agentIcon='.\experimental_img\agent-pic.PNG' 
      price='$800' address='2/5 Temple Street, Victoria Park' bedNum='4'
      bathNum = '2' carNum = '2' typeProp='House'
      />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  </>
);

export default App;
