import React from 'react';
import styled from 'styled-components';

const LoginForm = styled.form`
  width: 380px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0px;
  padding-top: 50px;
  transform: translate(-50%, -50%);
  background: #1e272e;
  text-align: center;
`;

const LoginTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 50px;
`;

const InputText = styled.input.attrs({
  type: 'text',
  placeholder: 'Username',
})`
  background: none;
  display: block;
  /* left/right are set to 'auto' for centering */
  margin: 20px auto;
  text-align: center;
  border: 2px solid #0fbcf9;
  outline: none;
  color: white;
  border-radius: 24px;
  width: 200px;
  padding: 14px 10px;
  transition: 0.25s linear;
  font-size: 15px;
  &:focus {
    width: 280px;
    border-color: #05c46b;
  }
`;

const InputPassWord = styled(InputText).attrs({
  type: 'password',
  placeholder: 'Password',
})``;

const Login = () => (
  <LoginForm>
    <LoginTitle>Login</LoginTitle>
    <InputText></InputText>
    <InputPassWord></InputPassWord>
  </LoginForm>
);

export default Login;
