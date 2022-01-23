import React from 'react';
import WithRouter from '../../hoc/WithRouter';
import backendApi from '../../api/backendApi';
import Logo from '../../assests/img/logo_red.svg';
import title from '../../assests/img/title2.png';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import { Button } from '../../hoc/Button';
import { Link } from 'react-router-dom';
import passwordIcon from '../../assests/img/lock.png';
import FormWrapper from '../../hoc/FormWrapper';
import ServerMsg from '../../hoc/ServerMsg';
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
} from '../../hoc/AuthForm';

class ResetPasswordPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      updated: false,
      isLoading: false,
      error: false,
      blur: false,
    };
  }

  async componentDidMount() {
    const { params } = this.props.router;
    const token = params.token;
    try {
      const response = await backendApi.get('/reset', {
        params: {
          resetPasswordToken: token,
        },
      });
      if (response.data.message === 'password reset link a-ok') {
        console.log(response.data);
        this.setState({
          email: response.data.email,
          updated: false,
          isLoading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        updated: false,
        isLoading: false,
        error: true,
      });
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { params } = this.props.router;
    const token = params.token;
    try {
      const response = await backendApi.put('/updatePasswordViaEmail', {
        email,
        password,
        resetPasswordToken: token,
      });
      if (response.data.message === 'password updated') {
        this.setState({
          updated: true,
          error: false,
        });
      } else {
        this.setState({
          updated: false,
          error: true,
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  getError(password) {
    const PASSWORD_REGEXP = /^[0-9A-Za-z]{6,}$/;
    if (!password) {
      return 'Please input your new password';
    }
    if (!PASSWORD_REGEXP.test(password)) {
      return 'Your password must be longer than 6 characters';
    }
    return '';
  }

  render() {
    const { password, error, isLoading, updated, blur } = this.state;
    const authError = this.getError(this.state.password);
    if (error) {
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
            <Title>Problem resetting password. Please send another reset link.</Title>
          </MainBox>
        </Container>
      );
    }
    if (isLoading) {
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
            <Title>Loading User Data...</Title>
          </MainBox>
        </Container>
      );
    }
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
          <Title>Reset Your Password</Title>
          <FormWrapper onSubmit={this.updatePassword}>
            <Form htmlFor="password">
              <Input
                size="400px"
                name="password"
                id="password"
                label="password"
                onChange={this.handleChange('password')}
                onBlur={() => this.setState({ blur: true })}
                value={password}
                type="password"
                defaultText="New Password"
                iconleft={passwordIcon}
                hidden="true"
              />
            </Form>
            <br />
            <Button primary type="submit" size="400px" height="50px" disabled={authError}>
              Update Password
            </Button>
          </FormWrapper>
          {blur && authError && <ServerMsg status="error">{authError}</ServerMsg>}
          {updated && (
            <ServerMsg status="success">
              Your password has been successfully reset, please try logging in again.
            </ServerMsg>
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
export default WithRouter(ResetPasswordPage);
