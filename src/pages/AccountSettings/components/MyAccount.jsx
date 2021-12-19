import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Check from './Check';

const Container = styled.div`
  padding-right: 70px;
  text-align: left;
`;
const Subtitle = styled.h1`
  padding-bottom: 90px;
  border-bottom: 1px solid #eceef3;
`;
const InfoChange = styled.h3`
  color: #999;
  padding-top: 5px;
  margin-bottom: 0;
`;
const Info = styled.span`
  color: #000;
  font-size: 22px;
  padding-bottom: 200px;
`;
const linkStyle = {
  paddingLeft: '20px',
  color: '#e4022b',
  textDecoration: 'underline',
};
const EmailWrapper = styled.div`
  margin-bottom: 25px;
`;
const PassWrapper = styled.div`
  margin-bottom: 25px;
`;
const Protect = styled.h2`
  margin-bottom: 20px;
`;
const Content = styled.p`
  font-size: 18px;
  color: #333f48;
`;
const linkOut = {
  fontSize: '22px',
  color: '#e4022b',
  textDecoration: 'underline',
  paddingTop: '10px',
  display: 'block',
};
const PropertyWrapper = styled.div`
  margin-top: 15px;
  border-top: 1px solid #eceef3;
  padding-top: 15px;
`;
const ContentProperty = styled.p`
  font-size: 18px;
  color: #777777;
`;
const CheckWrapper = styled.div`
  text-align: right;
  margin-top: 20px;
  padding-right: 20px;
`;

const MyAccount = () => {
  return (
    <div>
      <Container>
        <Subtitle>My Account</Subtitle>
        <EmailWrapper>
          <InfoChange>Email address</InfoChange>
          <Info>
            rachel@gmail.com
            <Link to="/with-link" style={linkStyle}>
              change
            </Link>
          </Info>
        </EmailWrapper>
        <PassWrapper>
          <InfoChange>Password</InfoChange>
          <Info>
            123456
            <Link to="/with-link" style={linkStyle}>
              change
            </Link>
          </Info>
        </PassWrapper>
        <Protect>Protecting your account</Protect>
        <ContentProperty>
          If you have lost a device or have recently used a public computer, the simplest way to
          protect your account is to change your password and then request a logout of all sites and
          devices below.
        </ContentProperty>
        <InfoChange>Session management</InfoChange>
        <Link to="/with-link" style={linkOut}>
          logout of all sites and devices
        </Link>
        <br />
        <Link to="/with-link" style={linkOut}>
          Delete account
        </Link>
        <PropertyWrapper>
          <Row>
            <Col span={16}>
              <h2>Property Updates</h2>
              <Content>
                Relevant market data, recent sales & auction results and updates on your property.
                For personalised updates track your property.
              </Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </PropertyWrapper>
        <PropertyWrapper>
          <Row>
            <Col span={16}>
              <h2>Personalised Advertising</h2>
              <Content>
                Personalised Advertising Display advertising will be tailored for you based on your
                activity and information you have provided to us. If you opt out, display
                advertising will still appear but it will be less relevant. More information
              </Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </PropertyWrapper>
        <PropertyWrapper>
          <Row>
            <Col span={16}>
              <h2>Suggested Properties</h2>
              <Content>
                We find and suggest properties that are like others you have been researching
              </Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </PropertyWrapper>
      </Container>
    </div>
  );
};

export default MyAccount;
