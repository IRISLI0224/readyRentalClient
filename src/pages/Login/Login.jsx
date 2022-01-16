import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from '../../assests/img/logo_red.svg';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import { Button } from '../../hoc/Button';
import { Link } from 'react-router-dom';
import emailIcon from '../../assests/img/email.png';
import passwordIcon from '../../assests/img/lock.png';
import validate from '../../hoc/Form/validate';
import InputErrorMsg from '../../hoc/InputErrorMsg';
import FormWrapper from '../../hoc/FormWrapper';
import ServerMsg from '../../hoc/ServerMsg';

//API
import { UserLogin } from '../../config/Users';
import { setToken } from '../../utils/authentication';

const HOMEPAGE = '/';

const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: rgb(243, 244, 246);
  letter-spacing: 1px;}`;

const LoginForm = styled.form`
width: 500px;
    height: 460px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0px;
    padding-top: 50px;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #fff;
    text-align: center;
    box-shadow: 1px 1px 3px 1px #95a5a6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
  
`;

const LoginTitle = styled.h1`
  margin-top: 10px;
  font-size: 1.2rem;
  color: rgb(51, 63, 72);
  text-align: center;
  line-height: 1.75rem;
`;

//temporally use url from real estate
const ForgetPassword = styled.a.attrs({
  href: '/join',
})`
  text-decoration: none;
  color: #2b6ed2;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    color: #030fb1;
  }
  margin-top: 5px;
  margin-bottom: 20px;
`;

const LogoImg = styled.img`
  width: 200px;
`;

const Container = styled.div`
  background-color: white;
  text-align: center;
  display: flex;
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
}
   }
 
`;

const LogoBox = styled.div`
  margin-left: 40px;
  text-align: center;
`;

const CreateTitle = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  color: rgb(51, 63, 72);
  text-align: center;
  line-height: 1.75rem;
`;

const LinktoLogin = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisable: false,
      data: {
        email: {
          value: '',
          blurred: false,
        },
        password: {
          value: '',
          blurred: false,
        },
      },
      isFormSubmit: false,
      error: null,
      isLoading: false,
      authErrors: null,
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  handleDataChange(event) {
    const { name, value } = event.target;
    this.setData(name, {
      value,
    });
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target;
    this.setData(name, {
      blurred: true,
    });
  }

  setData(name, newData) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          ...newData,
        },
      },
    }));
  }

  getErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[name].blurred;
    return (showInputError || isFormSubmit) && error[name];
  }

  getError() {
    const { data } = this.state;
    const error = {};
    Object.keys(data).forEach((name) => {
      const errorOfName = validate(name, data);
      if (!errorOfName) {
        return;
      }
      error[name] = errorOfName;
    });
    return error;
  }

  userLogin() {
    this.setState({ error: null, isLoading: true }, () => {
      const { data } = this.state;
      UserLogin(data.email.value, data.password.value)
        .then((res) => {
          this.setState({ isLoading: false }, () => {
            if (res.data?.token) {
              setToken(res.data.token);
              //back to home page
              window.location.href = HOMEPAGE;
            } else {
              this.state.authErrors = res.data;
              this.state.isLoading = true;
            }
          });
        })
        .catch((error) => 
        this.setState({ error, isLoading: false })
        );
    });
  }

  render() {
    const { data, error: authError, isLoading, authErrors } = this.state;
    const error = this.getError(data);
    return (
      <Container>
        <MainBox>
          <LogoBox>
            <a href="/">
              <LogoImg src={Logo} />
            </a>
          </LogoBox>
          <CreateTitle>Sign in</CreateTitle>
          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
            }}
          >
            <Form htmlFor="email">
              <Input
                size="400px"
                name="email"
                id="email"
                type="email"
                value={data.email.value}
                defaultText="Email address"
                iconleft={emailIcon}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'email')}
              />
            </Form>
            <InputErrorMsg class="ErrorMsg">{this.getErrorMessage(error, 'email')}</InputErrorMsg>
            <br />
            <br />
            <Form htmlFor="password">
              <Input
                size="400px"
                name="password"
                id="password"
                type="password"
                value={data.password.value}
                defaultText="Password"
                iconleft={passwordIcon}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                hidden="true"
                error={this.getErrorMessage(error, 'password')}
              />
            </Form>
          </FormWrapper>
          <Button primary size="400px" height="50px" onClick={this.userLogin}>
            Sign in
          </Button>
          <br />
          {authErrors && <ServerMsg status="error">{authErrors}</ServerMsg>}
          <br/>
          {isLoading && <ServerMsg status="success">Login Success!</ServerMsg>}
          <ForgetPassword>
            {' '}
            <Link to="/forgotPassword">Forgot your password?</Link>
          </ForgetPassword>
          <ForgetPassword>
            Haven't got an account?&nbsp;&nbsp; <Link to="/join">Join</Link>
          </ForgetPassword>
          <br />
        </MainBox>
      </Container>
    );
  }
}
export default Login;
