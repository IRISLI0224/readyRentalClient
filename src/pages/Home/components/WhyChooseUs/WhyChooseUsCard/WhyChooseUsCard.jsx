import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  margin-bottom: 30px;
  padding: 50px 25px 40px;
  text-align: center;
  box-sizing: border-box;
  width: 295.75px;
  margin: 0 15px 30px;
  @media (max-width: 1350px) {
    width: 450px;
  }
  @media (max-width: 1025px) {
    width: 510px;
  }
  .icon {
    transition: 0.6s;
  }
  .img {
    transition: 0.6s;
  }
  &:hover {
    .icon {
      background-color: #234dd4;
    }
    .iconText {
      filter: drop-shadow(150px 0 #ffffff);
    }
  }
`;

const Icon = styled.div`
  border-radius: 50%;
  height: 112px;
  line-height: 112px;
  margin: 0 auto;
  width: 112px;
  color: #234dd4;
  overflow: hidden;
`;

const Img = styled.img`
  src: ${(props) => props.src};
  width: 50%;
  height: 50%;
  transform: translateX(-150px);
  filter: drop-shadow(150px 0 #234dd4);
`;

const Details = styled.div`
  h4 {
    color: #0d263b;
    font-family: Cerebri Sans;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 18px;
  }
  p {
    font-size: 14px;
    font-family: Cerebri Sans;
    line-height: 24px;
    margin: 0 0 10px;
    color: #696969;
    font-weight: 400;
  }
`;

const WhyChooseUsCard = ({ src, title, children }) => {
  return (
    <Container>
      <Icon className="icon">
        <Img className="iconText" src={src} />
      </Icon>
      <Details>
        <h4>{title}</h4>
        <p>{children}</p>
      </Details>
    </Container>
  );
};

WhyChooseUsCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default WhyChooseUsCard;
