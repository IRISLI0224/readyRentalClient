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

const Textarea = styled.textarea`
border-radius: 3px;
margin: 5px;
color: #2d333a;
border: 1px solid ${(props) => (props.error ? '#ff4d4f' : '#c2c8d0')};
display: block;
width: 506px;
height: 150px;
font-size: 1.25rem;
padding: 12px 16px;

@media screen and (max-width: 1024px) {
  width: 100%;
}

`;

const TextArea = function TextArea({
  ...props
}) {
  return (
    <StyledTextInput>
         <Label>{props.label}</Label>
        <Textarea  {...props} />
    </StyledTextInput>
  );
};

export default TextArea;