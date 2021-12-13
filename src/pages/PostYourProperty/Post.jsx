import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
// import Demo from "./Demo";
// import ContactDetail from "./ContactDetail";
import PostForm from './PostForm';

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const Title = styled.div`
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin: 1000 auto;
  backgroud: red;
`;
const DemoWrapper = styled.div`
  //   display: flex;
  //   justify-content: flex-start;
  text-align: left;
  margin-top: 60px;
  margin-left: -190px;
`;
// const Subtitle = styled.div`
//   text-align: left;
//   margin-top: 60px;
//   margin-left: 108px;
// `;
// const DetailWrapper = styled.div`;
//   text-align: left;
//   margin-top: 30px;
//   margin-left: -360px;
//   padding-botton: 300px;
// `;

const Post = () => {
  return (
    <Container>
      <Title>
        <h1>Post Your Property</h1>
      </Title>
      {/* 3 cards */}
      <CardWrapper>
        <Card title="01 Add details of your property " style={{ width: 350 }}>
          <p>
            Begain by telling us the few basic details about your property like your property type
            lacation, No. ofrooms etc
          </p>
        </Card>
        <Card title="02 Upload Photo and Videos " style={{ width: 350 }}>
          <p>
            Upload photos and videos of your property either via your desktop device or from your
            mobie phone
          </p>
        </Card>
        <Card title="03 Add Pricing and Ownership " style={{ width: 350 }}>
          <p>
            Jusi update your property's Ownership details and your expeced orice and your property
            is ready for posting
          </p>
        </Card>
      </CardWrapper>
      <DemoWrapper>
        <PostForm />
      </DemoWrapper>
    </Container>
  );
};

export default Post;
