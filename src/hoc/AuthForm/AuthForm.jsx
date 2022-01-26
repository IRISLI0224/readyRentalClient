import styled from 'styled-components';

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
    @media (max-width: 550px) {
      display: none;
    }
  }
  @media (max-width: 550px) {
    background-color: black;
  }
`;

const MainBox = styled.div`
  padding: 0 0 1.5rem;
  border: 1;
  border-radius: 7px;
  margin: auto;
  margin-top: 100px;
  width: 500px;
  max-width: 500px;
  height: auto;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -15%);
  z-index: 999;
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
  background: #353333;
  opacity: 0.8;
  Button {
    margin: 0.5rem 0 46px;
    @media (max-width: 550px) {
      size: 95%;
    }
  }
  @media (max-width: 550px) {
    width: 95%;
    opacity: 1;
  }
`;

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
  margin-bottom: 20px;
`;

const LogoBoxBackground = styled.div`
  width: 100%;
  background-color: white;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const LogoBox = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 40px;
`;

const TitleImg = styled.img`
  width: 200px;
  margin-left: 10px;
`;

const Title = styled.div`
  margin: 3rem 0 1rem;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  line-height: 1.75rem;
`;

const LinktoLogin = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 20px;
  color: white;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 95%;
  @media (max-width: 550px) {
    width: 95%;
  }
`;

export {
  Container,
  MainBox,
  ForgetPassword,
  LogoBoxBackground,
  LogoBox,
  LogoImg,
  TitleImg,
  Title,
  LinktoLogin,
  FormWrapper,
};
