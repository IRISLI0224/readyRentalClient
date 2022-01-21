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
    margin-top: ${(props) => props.margin};
    margin-bottom: ${(props) => props.margin};
}
`;

const Label = styled.label`
  margin: 0 0 5px 5px;
`;

const Form = ({ label, htmlFor, margin, children }) => (
  <Item margin={margin}>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </Item>
);

Form.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
