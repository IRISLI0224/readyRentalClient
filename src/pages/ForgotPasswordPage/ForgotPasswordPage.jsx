import React from 'react';
import styled from 'styled-components';
import Logo from '../../assests/img/logo_red.svg';
import title from '../../assests/img/title2.png';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import { Button } from '../../hoc/Button';
import { Link } from 'react-router-dom';
import emailIcon from '../../assests/img/email.png';
import FormWrapper from '../../hoc/FormWrapper';
import ServerMsg from '../../hoc/ServerMsg';
import backendApi from '../../api/backendApi';

const LogoImg = styled.img`
  width: 50px;
`;

const TitleImg = styled.img`
  width: 200px;
  margin-left: 10px;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 10px;
`;

const MainBox = styled.div`
  padding: 1.5rem 3rem 0px;
  border: 1;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: 460px;
  text-align: center;
  position: relative;
  border: 2px solid #e5e8ec;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-around;
`;

const LogoBox = styled.div`
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  color: rgb(51, 63, 72);
  text-align: center;
  line-height: 1.75rem;
  font-weight: 700;
`;

const ReminderMsg = styled(Title)`
  font-size: 0.9rem;
  font-family: Museo-Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.5rem;
  font-weight: 300;
  color: #808080;
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
        <MainBox>
          <LogoBox>
            <a href="/">
              <LogoImg src={Logo} />
              <TitleImg src={title} />
            </a>
          </LogoBox>
          <Title>Forgot your password?</Title>
          <ReminderMsg>
            Enter your email and we’ll send you a code you can use to update your password.
          </ReminderMsg>
          <FormWrapper onSubmit={this.sendEmail}>
            <Form htmlFor="email">
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
            <br />
            <Button primary type="submit" size="400px" height="50px">
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
          <br />
          <Link to="/login">Go back to sign in.</Link>
          <br />
        </MainBox>
      </Container>
    );
  }
}
export default ForgotPasswordPage;
