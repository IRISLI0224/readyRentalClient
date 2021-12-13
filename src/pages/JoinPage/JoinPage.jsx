import React from 'react';
import styled from 'styled-components';
import Logo from '../../app/Header/NavigationBar/Logo';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import Button from '../../hoc/Button';
import { Link } from 'react-router-dom';
import emailIcon from '../../assests/img/email.png';
import passwordIcon from '../../assests/img/lock.png';

const Container = styled.div`
  background-color: white;
  text-align: center;
  display: flex;
  line-height: 10px;
`;

const MainBox = styled.div`
    padding: 1.5rem 3rem 0px;
    border:1;
    margin: auto;
    margin-top:100px;
    width:500px;
    height:400px;
    text-align: center;
    position: relative;
    border: 2px solid;
    border-image: linear-gradient(45deg, #fdfdf9, deeppink) 1;
    clip-path: inset(0px round 2px);
    animation: huerotate 6s infinite linear;
    filter: hue-rotate(360deg);
   
   }
 
  @keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
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
`;

class JoinPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind;
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Container>
        <MainBox>
          <LogoBox>
            <Logo />
          </LogoBox>
          <CreateTitle>Create Account</CreateTitle>
          <Form htmlFor="email">
            <Input
              size="lg"
              name="email"
              id="email"
              type="email"
              defaultText="Email address"
              iconleft={emailIcon}
              onChange={this.handleDataChange}
            />
          </Form>
          <br />
          <br />
          <Form htmlFor="password">
            <Input
              size="lg"
              name="password"
              id="password"
              type="string"
              defaultText="Password"
              iconleft={passwordIcon}
              onChange={this.handleDataChange}
            />
          </Form>
          <br />
          <br />
          <Button>Create Account</Button>
          <LinktoLogin>
            <div>Already have an account?&nbsp;&nbsp;</div>
            <Link to="/login">Sign in</Link>
          </LinktoLogin>
        </MainBox>
      </Container>
    );
  }
}

export default JoinPage;
