import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  cursor: pointer;
  border-radius: 3px;
  margin: 0 15px 30px;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  /* @media (max-width: 1350px) {
    width: 450px;
  } */
  .img {
    transition: 0.6s;
  }
  &:hover {
    .img {
      transform: scale(1.2) rotate(-3deg);
    }
  }
`;

const BackgroundImg = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
`;

const Curtain = styled.div`
  background: rgba(57, 96, 128, 0.253);
  border-radius: 3px;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
`;

const IconName = styled.h4`
  color: #ffffff;
  font-size: 20px;
  font-family: Cerebri Sans;
  font-weight: 600;
  line-height: 1.43rem;
`;

const Details = styled.div`
  bottom: 20px;
  left: 0;
  position: absolute;
  right: 0;
`;

const PropertyNumber = styled.div`
  color: white;
`;

const ExploreCitiesCard = ({ name, city, background, background_alt, number, width, height }) => {
  const propertiesString = 'properties';
  const propertyString = 'property';
  const property = number > 1 ? number + ' ' + {propertiesString} : number + ' ' + {propertyString};
  return (
    <Link to={`/search?input=${city}`}>
      <Container width={width} height={height}>
        <BackgroundImg className="img" src={background} alt={background_alt} />
        <Curtain />
        <Details>
          <IconName>{name}</IconName>
          <PropertyNumber>{property}</PropertyNumber>
          <br />
        </Details>
      </Container>
    </Link>
  );
};

ExploreCitiesCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  background_alt: PropTypes.string.isRequired,
  icon_alt: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ExploreCitiesCard;
