import React from 'react';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';
import { Wrapper } from '../Wrapper';
import { SpanText } from '../SpanText/SpanText';

const StyledEditBtn = styled.button`
  width: 80px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: none;
  border: none;
  background-color: transparent;
  color: rgb(51, 63, 72);
  border-radius: 0.1875rem;
  padding: 0.3125rem 1rem;
  margin: 0 0 0 auto;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgb(247, 248, 249);
    border: none;
  }
  &:visited {
    color: rgb(43, 110, 210);
  }
`;

const EditBar = () => {
  return (
    <Wrapper>
      <div>
        <SpanText>Status: </SpanText>
        <SpanText>Open </SpanText>
      </div>
      <StyledEditBtn>
        <FaPencilAlt />
        <span>Edit</span>
      </StyledEditBtn>
    </Wrapper>
  );
};

export default EditBar;