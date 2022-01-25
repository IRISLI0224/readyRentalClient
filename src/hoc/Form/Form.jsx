import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
  max-height: 100px;
  overflow: auto;
  display: flex;
  align-items: center;
  width: 85%;
  /* padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem; */
  margin-top: ${(props) => props.margin_top};
  margin-bottom: ${(props) => props.margin_bottom};
`;

const Label = styled.label`
  margin: 0 0 5px 5px;
`;

const Form = ({ label, htmlFor, margin_top, margin_bottom, children }) => (
  <Item margin_top={margin_top} margin_bottom={margin_bottom}>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </Item>
);

Form.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  margin_top: PropTypes.string.isRequired,
  margin_bottom: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
