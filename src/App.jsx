import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Header from './app/Header';
import Footer from './app/Footer';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';


const App = () => (
  <>
    <Header />
    <Home />
    <Footer />
    {/* <Header /> */}
    <Login />
    {/* <GlobalStyle /> */}
    {/* <Footer /> */}
  </>
);

export default App;
