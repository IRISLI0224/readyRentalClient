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
import { connect } from 'react-redux';
import { appendData } from '../../redux/action';
import title from '../../assests/img/title2.png';
import test from './Img/test.mp4';

//API
import { UserLogin } from '../../config/Users';
import { setToken } from '../../utils/authentication';

const HOMEPAGE = '/';

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
  width: 50px;
`;

const TitleImg = styled.img`
  width: 200px;
  margin-left: 10px;
`;

const Container = styled.div`
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 10px;
  height: 100vh;
  position: relative;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

const MainBox = styled.div`
  padding: 1.5rem 3rem 0px;
  border: 1;
  border-radius: 5px;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  height: auto;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
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
  background: white;
  Form {
    margin: 1rem;
  }
  Button {
    margin: 1rem;
  }
`;

const LogoBox = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 0;
  text-align: center;
`;

const CreateTitle = styled.div`
  margin: 10px;
  font-size: 1.2rem;
  color: rgb(51, 63, 72);
  text-align: center;
  line-height: 1.75rem;
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

  mapStateToProps = (store, ownProps) => {
    return {
      user: store.user,
    };
  };
  mapDispatchToProps = (dispatch) => {
    return {
      setUserInfo(userInfo) {
        dispatch({
          type: 'SET_USER_INFO',
          payload: userInfo,
        });
      },
    };
  };

  userLogin() {
    this.setState({ error: null, isLoading: true }, () => {
      const { data } = this.state;
      UserLogin(data.email.value, data.password.value)
        .then((res) => {
          this.setState({ isLoading: false }, () => {
            if (res.data?.token) {
              setToken(res.data.token);
              this.props.appendData({
                id: res.data?.user._id,
                email: res.data.user.email,
              });
              //back to home page
              window.location.href = HOMEPAGE;
            } else {
              const authErrors = res.data;
              const isLoading = true;
              this.setState({
                authErrors,
                isLoading,
              });
            }
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  }

  render() {
    const { data, error: authError, isLoading, authErrors } = this.state;
    const error = this.getError(data);
    return (
      <Container>
        <video
          source
          src={test}
          type="video/mp4"
          muted
          autoPlay={'autoplay'}
          preLoad="auto"
          loop
        ></video>
        <MainBox>
          <LogoBox>
            <a href="/">
              <LogoImg src={Logo} />
              <TitleImg src={title} />
            </a>
          </LogoBox>
          <CreateTitle>Sign in</CreateTitle>
          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
            }}
          >
            <Form htmlFor="email" margin_bottom="1rem">
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
<<<<<<< HEAD
            <InputErrorMsg className="ErrorMsg">{this.getErrorMessage(error, 'email')}</InputErrorMsg>
            <br />
            <br />
||||||| a067643
            <InputErrorMsg class="ErrorMsg">{this.getErrorMessage(error, 'email')}</InputErrorMsg>
            <br />
            <br />
=======
            {this.state.data.email.blurred && (
              <InputErrorMsg class="ErrorMsg">{this.getErrorMessage(error, 'email')}</InputErrorMsg>
            )}
>>>>>>> 179f0615cd015f1c7cc88a69421f966c71528e22
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
          {authErrors && <ServerMsg status="error">{authErrors}</ServerMsg>}
          {!authError || (isLoading && <ServerMsg status="success">Login Success!</ServerMsg>)}
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

const mapDispatchToProps = {
  appendData,
};

const mapStateToProps = (state) => ({
  email: state.email,
  id: state.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
