import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../hoc/Button';
import { PopUpContainer, NoShadowWrapperSpaceAround } from '../Wrapper';

const StyledLink = styled.a`
  text-decoration: underline;
`;

const PopUpContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 50%;
`;

const DeletePopup = ({ onCancel, onDeleteTrue, className }) => {
  return (
    <PopUpContainer className={className}>
      <PopUpContent>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this item？</p>
        <NoShadowWrapperSpaceAround>
          <Button primary onClick={(e) => onDeleteTrue(e)}>
            Delete
          </Button>
          <StyledLink href="#" onClick={onCancel}>
            Cancel
          </StyledLink>
        </NoShadowWrapperSpaceAround>
      </PopUpContent>
    </PopUpContainer>
  );
};

export default DeletePopup;
