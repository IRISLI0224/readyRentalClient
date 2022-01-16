import React from 'react';
import WithRouter from '../../hoc/WithRouter';
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../../assests/img/logo_red.svg';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import { Button } from '../../hoc/Button';
import { Link } from 'react-router-dom';
import passwordIcon from '../../assests/img/lock.png';
import FormWrapper from '../../hoc/FormWrapper';
import ServerMsg from '../../hoc/ServerMsg';

const LogoImg = styled.img`
  width: 200px;
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
  padding: 1.5rem 3rem 1.5rem;
  border: 1;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: 400px;
  text-align: center;
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

  Button {
    &:disabled {
      cursor: not-allowed;
      color: #00000040;
      border-color: #d9d9d9;
      background: #f5f5f5;
    }
  }
`;

const LogoBox = styled.div`
  margin-left: 40px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: rgb(51, 63, 72);
  text-align: center;
  line-height: 1.75rem;
  font-weight: 700;
`;

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
      const response = await axios.get('http://localhost:8080/api/v1/reset', {
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
      const response = await axios.put('http://localhost:8080/api/v1/updatePasswordViaEmail', {
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
          <MainBox>
            <LogoBox>
              <a href="/">
                <LogoImg src={Logo} />
              </a>
            </LogoBox>
            <Title>Problem resetting password. Please send another reset link.</Title>
          </MainBox>
        </Container>
      );
    }
    if (isLoading) {
      return (
        <Container>
          <MainBox>
            <LogoBox>
              <a href="/">
                <LogoImg src={Logo} />
              </a>
            </LogoBox>
            <Title>Loading User Data...</Title>
          </MainBox>
        </Container>
      );
    }
    return (
      <Container>
        <MainBox>
          <LogoBox>
            <a href="/">
              <LogoImg src={Logo} />
            </a>
          </LogoBox>
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
          {updated && <br />}
          <Link to="/login">Go back to Sign in.</Link>
        </MainBox>
      </Container>
    );
  }
}
export default WithRouter(ResetPasswordPage);
