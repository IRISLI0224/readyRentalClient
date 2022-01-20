import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  color: #0d263b;
  font-weight: 600;
  line-height: 2.375rem;
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 30px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #696969;
  line-height: 1.25rem;
  margin-bottom: 0;
  font-weight: 400;
  font-family: Cerebri Sans;
`;

const CardContainer = styled.div`
  padding: 50px 15px 30px;
  display: flex;
  flex-wrap: ${(props) => props.wrap};
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1500px;
  overflow: hidden;
`;

const HomepageSection = ({ title, subtitle, wrap, children }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <CardContainer wrap={wrap}>{children}</CardContainer>
  </Container>
);

HomepageSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  wrap: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HomepageSection;
