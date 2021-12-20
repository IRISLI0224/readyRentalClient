import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ButtonStyle = styled.button`
  color: ${(props) => (props.primary ? '#ffff' : '#333f48')};
  border: 2px solid #e5e8ec;
  display: inline-block;
  text-decoration: none;
  width: ${(props) => props.size};
  height: ${(props) => props.height};
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
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-top: 30px; */
  &:hover {
    border-color: ${(props) => (props.primary ? '#a30000' : '#333f48')};
    color: ${(props) => (props.primary ? '#fff' : '#333f48')};
    background: ${(props) => (props.primary ? '#a30000' : 'transparent')};
  }
`;

export const Button = ({ children, size, onClick, primary, as, href, height }) => (
  <ButtonStyle onClick={onClick} size={size} primary={primary} as={as} href={href} height={height}>
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
