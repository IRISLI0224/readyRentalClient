import { Row, Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import EmailSubscriptions from './components/EmailSubscriptions';
import MyAccount from './components/MyAccount';

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding-bottom: 40px;
`;
const Title = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eceef3;
`;

const AccountSettings = () => {
  return (
    <div>
      <Container>
        <Title>Account Settings</Title>
        <Row>
          <Col span={12}>
            <MyAccount />
          </Col>
          <Col span={12}>
            <EmailSubscriptions />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountSettings;
