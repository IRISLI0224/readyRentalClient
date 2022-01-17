import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img_1 from '../../../assests/img/property1.jpg';

const Container = styled.div`
  margin: 0;
  background-color: #fff;
  text-align: center;
  //width: 700px;
`;

const NewsCardTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 1.3rem;
  color: props.theme.footerBlue;
`;

const NewsCard = styled.div`
  height: 50%;
  width: 100%;
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
  width: 40%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background: white;
  src: ${(props) => props.src};
`;

const NewsCardContent = styled.div`
  width: 65%;
  height: 100%;
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

const SlideCard = ({ PropertyInfo }, { key }) => {
  const link = 'property/' + PropertyInfo._id;
  const img = PropertyInfo.propImage.length > 0 ? PropertyInfo.propImage[0] : img_1;
  //const pic ='../../assests/img/property'+Math.floor(Math.random() * 3)+".jpg";
  return (
    <Container>
      <Link to={link}>
        <NewsCard>
          <NewsCardImg>
            <Img src={img}></Img>
          </NewsCardImg>
          <NewsCardContent>
            <NewsCardTitle>{PropertyInfo.address.city}</NewsCardTitle>
            <br />
            <span>{PropertyInfo.address.streetNumber} </span>
            <span>{PropertyInfo.address.streetName} </span>
            <span>{PropertyInfo.address.state} </span>
            <span>{PropertyInfo.address.postCode}</span>
            <p>{PropertyInfo.description}</p>
          </NewsCardContent>
        </NewsCard>
      </Link>
    </Container>
  );
};

export default SlideCard;
