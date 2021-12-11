import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
  color: ${(props) => (props.primary ? '#ffff' : '#333f48')};
  border: 2px solid #e5e8ec;
  display: inline-block;
  text-decoration: none;
  width: ${(props) => props.size};
  padding: 0.875em 1em;
  font-weight: 400;
  font-size: 1em;
  cursor: pointer;
  border-radius: 4px;
  line-height: 1;
  background: ${(props) => (props.primary ? props.theme.primaryColor : 'transparent')};
  text-align: center;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-in, ease-out;

  /* margin-top: 30px; */
  &:hover {
    border-color: ${(props) => (props.primary ? '#a30000' : '#333f48')};
    color: ${(props) => (props.primary ? '#fff' : '#333f48')};
    background: ${(props) => (props.primary ? '#a30000' : 'transparent')};
  }
`;

const Button = ({ children, size, onClick, primary }) => (
  <ButtonStyle onClick={onClick} size={size} primary={primary}>
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
