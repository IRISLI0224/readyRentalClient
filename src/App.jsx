// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { Routes,Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import PropertyDetails from './pages/PropertyDetails';
import Header from './app/Header';
import Footer from './app/Footer';

const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
  <GlobalStyle />
     <ThemeProvider theme={theme}>
      <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element ={<Login/>}/>
           <Route path="/property/:id" element={<PropertyDetails/>}/>
           <Route path="*" element={<NoPage/>}/>
       </Routes>
      <Footer/>
    </ThemeProvider>
  <GlobalStyle />
  </>
);

export default App;
