import React from 'react';
import { Row, Col } from 'antd';
import Check from './Check';
import styled from 'styled-components';

const Container = styled.div`
  padding-right: 70px;
  text-align: left;
`;
const EmailWrapper = styled.div`
  margin-top: 15px;
  border-top: 1px solid #eceef3;
  padding-top: 15px;
`;
const EmailContent = styled.div`
  font-size: 18px;
`;
const Content = styled.p`
  font-size: 18px;
  color: #777777;
`;
const CheckWrapper = styled.div`
  text-align: right;
  margin-top: 20px;
  padding-right: 20px;
`;

const EmailSubscriptions = () => {
  return (
    <div>
      <Container>
        <h1>Email Subscriptions</h1>
        <EmailContent>
          We're here to help you with relevant information wherever you are in your property
          journey. Let us know what you'd like in your inbox and we'll keep you up to date.
        </EmailContent>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Market updates</h2>
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
        </EmailWrapper>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Your property journey</h2>
              <Content>
                Recommended properties, information and tools tailored to your property search.
              </Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </EmailWrapper>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Property news & guides</h2>
              <Content>The latest property news, guides & inspiration.</Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </EmailWrapper>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Promoted residential properties</h2>
              <Content>Be notified about residential properties relevant to your search.</Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </EmailWrapper>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Promoted new developments</h2>
              <Content>Offers for new property projects relevant to your search.</Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </EmailWrapper>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Saved search alerts</h2>
              <Content>Click here to manage your saved search alerts</Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </EmailWrapper>
        <EmailWrapper>
          <Row>
            <Col span={16}>
              <h2>Property finance</h2>
              <Content>
                Updates and suggestions for buyers and property owners with tools, calculators and
                guides.
              </Content>
            </Col>
            <Col span={8}>
              <CheckWrapper>
                <Check />
              </CheckWrapper>
            </Col>
          </Row>
        </EmailWrapper>
      </Container>
    </div>
  );
};

export default EmailSubscriptions;
