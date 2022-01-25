import React from 'react';
import styled from 'styled-components';
import Logo from '../../assests/img/logo_red.svg';
import title from '../../assests/img/title2.png';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import { Button } from '../../hoc/Button';
import { Link } from 'react-router-dom';
import emailIcon from '../../assests/img/email.png';
import ServerMsg from '../../hoc/ServerMsg';
import backendApi from '../../api/backendApi';
import FormBackground from '../../assests/video/FormBackground.mp4';
import {
  Container,
  MainBox,
  LogoBoxBackground,
  LogoBox,
  LogoImg,
  TitleImg,
  Title,
  LinktoLogin,
  FormWrapper,
} from '../../hoc/AuthForm';

const ReminderMsg = styled.div`
  width: 90%;
  max-width: 90%;
  margin: 0 0 20px;
  font-size: 0.9rem;
  font-family: Museo-Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.5rem;
  font-weight: 300;
  color: #b4b3b3;
  opacity: 0.6;
`;
class ForgotPasswordPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await backendApi.post('/forgotPassword', {
          email,
        });
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const { email, messageFromServer, showNullError, showError } = this.state;
    return (
      <Container>
        <video
          source
          src={FormBackground}
          type="video/mp4"
          muted
          autoPlay={'autoplay'}
          preLoad="auto"
          loop
        ></video>
        <MainBox>
          <LogoBoxBackground>
            <LogoBox>
              <a href="/">
                <LogoImg src={Logo} />
                <TitleImg src={title} />
              </a>
            </LogoBox>
          </LogoBoxBackground>
          <Title>Forgot your password?</Title>
          <ReminderMsg>
            Enter your email and we’ll send you a code you can use to update your password.
          </ReminderMsg>
          <FormWrapper onSubmit={this.sendEmail}>
            <Form htmlFor="email" margin_bottom="1rem">
              <Input
                size="400px"
                name="email"
                id="email"
                type="email"
                value={email}
                defaultText="Email address"
                iconleft={emailIcon}
                onChange={this.handleChange('email')}
                onBlur={this.handleBlurredChange}
              />
            </Form>
            <Button primary type="submit" size="83.5%" height="50px">
              Reset my password
            </Button>
          </FormWrapper>
          {showNullError && <ServerMsg status="error">The email address cannot be null.</ServerMsg>}
          {showError && (
            <ServerMsg status="error">
              That email address isn&apos;t recognized. Please try again or register for a new
              account.
            </ServerMsg>
          )}
          {messageFromServer === 'recovery email sent' && (
            <ServerMsg status="success">Password Reset Email Successfully Sent!</ServerMsg>
          )}
          <LinktoLogin>
            {' '}
            <Link to="/login">Go back to sign in.</Link>
          </LinktoLogin>
        </MainBox>
      </Container>
    );
  }
}
export default ForgotPasswordPage;
