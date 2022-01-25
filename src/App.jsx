import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import PropertyDetails from './pages/PropertyDetails';
import JoinPage from './pages/JoinPage';
import Layout from './app/Layout';
import ListedProperties from './pages/ListedProperties';
import Post from './pages/PostYourProperty/Post';
import AccountSettings from './pages/AccountSettings';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProtectedRouter from './protectedRouter';
import SearchResultV2 from './pages/SearchResultV2';

const theme = {
  primaryColor: '#0061df',
  themeBlue: '#0061df',
  footerBlue: '#0d263b',
  fontDark: '#0d2654',
  fontGray: '#69697c',
  buttonDark: '#164063',
};

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/reset/:token" element={<ResetPasswordPage />} />
          <Route path="/search" element={<SearchResultV2 />} />
          <Route path="/search/v2" element={<SearchResultV2 />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="*" element={<NoPage />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/property/manage-listings" element={<ListedProperties isListing />} />
            <Route path="/property/inspection" element={<ListedProperties isInspection />} />
            <Route path="/property/post" element={<Post isPost />} />
            <Route path="/property/edit/:id" element={<Post />} />
            <Route path="/account" element={<AccountSettings />} />
          </Route>
        </Routes>
      </Layout>
    </ThemeProvider>
    <GlobalStyle />
  </React.Fragment>
);

export default App;
