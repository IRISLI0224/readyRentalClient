import React from 'react';
import styled from 'styled-components';
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

//API
import { UserRegister } from '../../config/Users';
import { setToken } from '../../utils/authentication';

const HOMEPAGE = '/';

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

const LogoImg = styled.img`
  width: 200px;
`;

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
              const authErrors = res.data
              const isLoading = true;
              this.setState({
                authErrors,
                isLoading
              })
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
        <MainBox>
          <LogoBox>
            <a href="/">
              <LogoImg src={Logo} />
            </a>
          </LogoBox>
          <CreateTitle>Create Account</CreateTitle>
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
          <Button primary size="400px" height="50px" onClick={this.userRegister}>
            Create Account
          </Button>
          {authErrors && <ServerMsg status="error">{authErrors}</ServerMsg>}
          {!authError || isLoading && <ServerMsg status="success">Register Success!</ServerMsg>}
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
