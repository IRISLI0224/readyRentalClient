import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
    max-height: 100px;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;

const Label = styled.label`
  margin: 0 0 5px 5px;
`;

const Form = ({label,htmlFor,children}) => (
  <Item>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </Item>
 );

 Form.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default Form;