import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import PostForm from '../../components/PropertyForm/PostForm';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import '@ant-design/pro-card/dist/card.css';

const Title = styled.div`
  text-align: center;
  margin-top: 60px;
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin: 1000 auto;
`;
const DemoWrapper = styled.div`
  text-align: left;
  align-items: center;
  margin: 60px auto;
  width: 1100px;
`;
const Post = ({ isPost }) => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <Title>
        <h1>Post Your Property</h1>
      </Title>
      <CardWrapper>
        <RcResizeObserver
          key="resize-observer"
          onResize={(offset) => {
            setResponsive(offset.width < 596);
          }}
        >
          <ProCard
            bordered
            split={responsive ? 'horizontal' : 'vertical'}
            style={{ width: '1100px' }}
          >
            <ProCard split={responsive ? 'horizontal' : 'vertical'}>
              <ProCard title="01 Add details of your property ">
                Begain by telling us the few basic details about your property like your property
                type lacation, No. ofrooms etc
              </ProCard>
              <ProCard title="02 Upload Photo and Videos ">
                Upload photos and videos of your property either via your desktop device or from
                your mobie phone
              </ProCard>
              <ProCard title="03 Add Pricing and Ownership ">
                Just update your property's Ownership details and your expeced orice and your
                property is ready for posting
              </ProCard>
            </ProCard>
          </ProCard>
        </RcResizeObserver>
      </CardWrapper>
      <DemoWrapper>
        <DemoWrapper>
          <PostForm />
        </DemoWrapper>
      </DemoWrapper>
    </>
  );
};

export default Post;
