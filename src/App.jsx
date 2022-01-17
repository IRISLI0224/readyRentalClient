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
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

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
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/reset/:token" element={<ResetPasswordPage />} />
          <Route path="/property/manage-listings" element={<ListedProperties isListing />} />
          <Route path="/property/inspection" element={<ListedProperties isInspection />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/property/post" element={<Post isPost />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/property/edit/:id" element={<Post />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export default App;
