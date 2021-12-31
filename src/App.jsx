import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import PropertyDetails from './pages/PropertyDetails';
import JoinPage from './pages/JoinPage';
import SignUp from './pages/SignUp';
import SearchResult from './pages/SearchResult';
import Layout from './app/Layout';
import ListedProperties from './pages/ListedProperties';
import Post from './pages/PostYourProperty/Post';
import AccountSettings from './pages/AccountSettings';
import UploadImage from './pages/UploadImage';

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
          <Route path="/join" element={<JoinPage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/property/manage-listings" element={<ListedProperties />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/property/post" element={<Post />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/uploadImage" element={<UploadImage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export default App;
