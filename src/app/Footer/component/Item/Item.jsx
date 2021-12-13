// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemStyle = styled.button`
  color: #cbcfd4;
  font-size: 17px;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  padding: 0 1rem;
  cursor: pointer;
  &:hover,
  &::selection {
    color: #fff;
    text-shadow: none;
  }
`;

const Item = ({ onClick, children }) => <ItemStyle onClick={onClick}>{children}</ItemStyle>;

Item.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Item;
