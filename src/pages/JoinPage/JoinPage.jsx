import React from 'react';
import Logo from '../../assets/img/logo_red.svg';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import { Button } from '../../hoc/Button';
import { Link } from 'react-router-dom';
import emailIcon from '../../assets/img/email.png';
import passwordIcon from '../../assets/img/lock.png';
import validate from '../../hoc/Form/validate';
import InputErrorMsg from '../../hoc/InputErrorMsg';
import ServerMsg from '../../hoc/ServerMsg';
import { connect } from 'react-redux';
import { appendData } from '../../redux/action';
import title from '../../assets/img/title2.png';
import FormBackground from '../../assets/video/FormBackground.mp4';
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

//API
import { UserRegister } from '../../config/Users';
import { setToken } from '../../utils/authentication';

const HOMEPAGE = '/';

class JoinPage extends React.Component {
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
    this.userRegister = this.userRegister.bind(this);
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

  userRegister() {
    this.setState({ error: null, isLoading: true }, () => {
      const { data } = this.state;
      UserRegister(data.email.value, data.password.value)
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
        .catch((error) => {
          this.setState({ error, isLoading: false });
        });
    });
  }

  render() {
    const { data, error: authError, isLoading, authErrors } = this.state;
    const error = this.getError(data);
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
          <Title>Create Account</Title>
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
            {this.state.data.email.blurred && this.getErrorMessage(error, 'email') && (
              <InputErrorMsg class="ErrorMsg">{this.getErrorMessage(error, 'email')}</InputErrorMsg>
            )}
            <Form htmlFor="password" margin_bottom="1rem">
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
            {this.state.data.password.blurred && this.getErrorMessage(error, 'password') && (
              <InputErrorMsg class="ErrorMsg">
                {this.getErrorMessage(error, 'password')}
              </InputErrorMsg>
            )}
          </FormWrapper>
          <Button primary size="80%" height="50px" onClick={this.userRegister}>
            Create Account
          </Button>
          {authErrors && <ServerMsg status="error">{authErrors}</ServerMsg>}
          {!authError || (isLoading && <ServerMsg status="success">Register Success!</ServerMsg>)}
          <LinktoLogin>
            <div>Already have an account?&nbsp;&nbsp;</div>
            <Link to="/login">Sign in</Link>
          </LinktoLogin>
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

export default connect(mapStateToProps, mapDispatchToProps)(JoinPage);
