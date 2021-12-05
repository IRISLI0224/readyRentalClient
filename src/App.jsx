// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { Routes,Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import PropertyDetails from './pages/PropertyDetails';
import JoinPage from './pages/JoinPage';

const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/join" element ={<JoinPage/>}/>
        <Route path="/Property/:id" element={<PropertyDetails/>}/>
        
        <Route path="*" element={<NoPage/>}/>
       </Routes>
    
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export default App;
