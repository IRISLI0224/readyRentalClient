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
  width: 295.75px;
  height: 351.812px;
  @media (max-width: 1350px) {
    width: 450px;
  }
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
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

const PropertyImg = styled.img`
  width: 60%;
  height: 60%;
  transform: translateX(-150px);
  filter: drop-shadow(150px 0 #ffffff);
`;

const Curtain = styled.div`
  background: rgba(13, 38, 59, 0.5);
  border-radius: 3px;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
`;

const Icon = styled.div`
  color: #ffffff;
  font-size: 60px;
  margin: auto;
  margin-bottom: 50px;
  width: 112px;
  height: 112px;
  overflow: hidden;
`;

const IconName = styled.h4`
  color: #ffffff;
  font-size: 18px;
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

const ExploreOurPropertiesCard = ({ icon, icon_alt, name, type, background, background_alt }) => {
  return (
    <Link to={`/search?type=${type}`}>
      <Container>
        <BackgroundImg className="img" src={background} alt={background_alt} />
        <Curtain />
        <Details>
          <Icon>
            <PropertyImg src={icon} alt={icon_alt}></PropertyImg>
          </Icon>
          <IconName>{name}</IconName>
        </Details>
      </Container>
    </Link>
  );
};

ExploreOurPropertiesCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  background_alt: PropTypes.string.isRequired,
  icon_alt: PropTypes.string.isRequired,
};

export default ExploreOurPropertiesCard;
