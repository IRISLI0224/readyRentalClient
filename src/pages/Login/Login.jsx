import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from '../../app/Header/NavigationBar/Logo';

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: rgb(243, 244, 246);
  letter-spacing: 1px;}`;

const LoginForm = styled.form`
  width: 400px;
  height: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0px;
  padding-top: 50px;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;
  /* h-offset v-offset blur spread color */
  box-shadow: 1px 1px 3px 1px #95a5a6;
`;

const LoginTitle = styled.h1`
  color: #333333;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 30px;
`;

const InputText = styled.input.attrs({
  type: 'email',
  placeholder: 'Email Address',
})`
  background: none;
  display: block;
  /* left/right are set to 'auto' for centering */
  margin: 30px auto;
  text-align: center;
  border: 1px solid #666666;
  outline: none;
  color: #333333;
  border-radius: 10px;
  width: 300px;
  padding: 14px 10px;
  transition: 0.25s linear;
  font-size: 15px;
  &:focus {
    border: 2px solid #666666;
    width: 310px;
  }
`;

const InputPassWord = styled(InputText).attrs({
  type: 'password',
  placeholder: 'Password',
})``;

const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Login',
})`
  background: #e4002b;
  display: block;
  /* left/right are set to 'auto' for centering */
  margin: 40px auto 50px auto;
  text-align: center;
  border: none;
  outline: none;
  color: white;
  border-radius: 5px;
  padding: 13px 40px;
  transition: 0.4s linear;
  letter-spacing: 0.5px;
  width: 220px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background: #91011c;
  }
`;

const Register = styled.a.attrs({
  href: '/join',
})`
  text-decoration: none;
  color: #2980b9;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    color: #030fb1;
  }
`;

const Login = () => (
  <>
    <LoginForm>
      <Logo />
      <LoginTitle>Login</LoginTitle>
      <InputText></InputText>
      <InputPassWord></InputPassWord>
      <Submit></Submit>
      <Register>Don't have an account?</Register>
    </LoginForm>
    <GlobalStyle />
  </>
);

export default Login;
