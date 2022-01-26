import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.div`
margin-bottom: 24px;
`;

const Label = styled.label`
display: block;
margin: 5px;
font-size: 0.9rem;
color: rgb(45, 51, 58);
`;

const Input = styled.input`
border-radius: 3px;
color: #2d333a;
border: 1px solid ${(props) => (props.error ? '#ff4d4f' : '#c2c8d0')};
display: block;
width: 506px;
font-size: 1.25rem;
padding: 12px 16px;
margin: 5px;

@media screen and (max-width: 1024px) {
  width: 100%;
}
`;

const Error = styled.p`
margin: 5px 0 0 5px;
color: #ff4d4f;
font-size: 0.9rem;
`;

const TextInput = function TextInput({
  error,
  ...props
}) {
  return (
    <StyledTextInput>
      <Label>{props.label}</Label>
      <Input error={error}  {...props} />
      {error && (<Error>{error}</Error>)}
    </StyledTextInput>
  );
};

export default TextInput;