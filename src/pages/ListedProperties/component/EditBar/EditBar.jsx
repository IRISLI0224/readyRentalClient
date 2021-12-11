import React from 'react';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';

const StyledEditBtn = styled.button`
  width: 80px;
  color: rgb(43, 110, 210);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* flex-shrink: 0; */
  outline: none;
  border: none;
  background-color: transparent;
  color: rgb(51, 63, 72);
  border-radius: 0.1875rem;
  padding: 0.3125rem 1rem;
  margin: 0px;
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

const Wrapper = styled.div``;

const EditBar = () => {
  return (
    <Wrapper>
      <StyledEditBtn>
        <FaPencilAlt />
        <span className="edit">Edit</span>
      </StyledEditBtn>
    </Wrapper>
  );
};

export default EditBar;
