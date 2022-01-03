import React from 'react';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Wrapper, NoShadowWrapper } from '../../../Wrapper';
import { SpanText } from '../../../SpanText/SpanText';
import PropTypes from 'prop-types';

const StyledBtn = styled.button`
  width: 90px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: none;
  border: none;
  background-color: transparent;
  /* color: rgb(51, 63, 72); */
  color: rgb(43, 110, 210);
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

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

const EditBar = ({ property, onDelete }) => {
  return (
    <MarginBottom>
      <Wrapper>
        <div>
          <SpanText>Status: </SpanText>
          <SpanText>{property.status}</SpanText>
        </div>
        <NoShadowWrapper>
          <StyledBtn>
            <FaPencilAlt />
            <span>Edit</span>
          </StyledBtn>
          <StyledBtn as="a" href={`/property/${property._id}`}>
            <GrView />
            <span>View</span>
          </StyledBtn>
          <StyledBtn onClick={(e) => onDelete(e, property._id)}>
            <RiDeleteBin6Line />
            <span>Delete</span>
          </StyledBtn>
        </NoShadowWrapper>
      </Wrapper>
    </MarginBottom>
  );
};

EditBar.propTypes = {
  property: PropTypes.object.isRequired,
  onDelete: PropTypes.object.isRequired,
};

export default EditBar;
