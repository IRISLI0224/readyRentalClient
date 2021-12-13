import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import PropertyDetails from './pages/PropertyDetails';
import JoinPage from './pages/JoinPage';
import Header from './app/Header';
import Footer from './app/Footer';
import SignUp from './pages/SignUp';
import Layout from './app/Layout';
import ListedProperties from './pages/ListedProperties';
import Post from './pages/PostYourProperty/Post';

const theme = {
  primaryColor: '#e4002b',
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/property/manage-listings" element={<ListedProperties />} />
          <Route path="/property/post" element={<Post />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export default App;
