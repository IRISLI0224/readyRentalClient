import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img_first from '../../assests/img/property1.jpg';

const Container = styled.div`
  background-color: var(--ck-backgroundPrimaryLow);
  width: 600px;
`;

const NewsCardTitle = styled.div`
  width: 160px;
  height: 10px;
  text-align: left;
  font-size: 1.3rem;
  color: #333f48;
`;

const NewsCard = styled.div`
  height:150px;
  width: 400px;
  display: flex;
  text-align: left;
  margin-bottom: 60px;
  position: relative;
  &:hover {
    h3 {
      color: #e4002b;
    }
  }
  &:visited {
    color: #fff;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    opacity: 0;
    z-index: 1;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NewsCardImg = styled.div`
  width: 200px;
  height: 150px;
`;

const Img = styled.img`
  width: 200px;
  height: 150px;
  src: ${(props) => props.src};
`;

const NewsCardContent = styled.div`
  width: 200px;
  height: 100px;
  padding: 0px 20px 0px 20px;
  line-height: 1.25em;
  h3 {
    margin: 0;
    padding-bottom: 0.4rem;
    line-height: 1.25;
    font-size: 1.5rem;
  }
  span {
    font-size: 0.75em;
    color: #969fa9;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }
  p {
    color: #697684;
    font-size: 1em;
    line-height: 1.5;
    margin: 0;
    padding-top: 0.8rem;
  }
`;

const SmallPropertyCard = ({ PropertyInfo }, { key }) => {
  const link = 'property/' + PropertyInfo._id;
  return (
    <Container>
      <Link to={link}>
        <NewsCard>
          <NewsCardImg>
            <Img src={img_first}></Img>
          </NewsCardImg>
          <NewsCardContent>
          <NewsCardTitle>{PropertyInfo.city}</NewsCardTitle>
          <br/>
            <h3>{PropertyInfo.address}</h3>
            <span>{PropertyInfo.postCode}</span>
            <p>{PropertyInfo.description}</p>
          </NewsCardContent>
        </NewsCard>
      </Link>
    </Container>
  );
};

export default SmallPropertyCard;
