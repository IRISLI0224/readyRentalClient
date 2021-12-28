import React from 'react';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { Wrapper, NoShadowWrapper } from '../../../Wrapper';
import { SpanText } from '../../../SpanText/SpanText';
import { getUserById } from '../../../../../../config/Users';
import PropTypes from 'prop-types';

const StyledBtn = styled.button`
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

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

const EditBar = ({ property }) => {
  return (
    <MarginBottom>
      <Wrapper>
        <div>
          <SpanText>Status: </SpanText>
          <SpanText>{property.status}</SpanText>
        </div>
        <NoShadowWrapper>
          <StyledBtn onClick={() => getUserById('61bdc1ceb1a8d5e7b976f038')}>
            <FaPencilAlt />
            <span>Edit</span>
          </StyledBtn>
          <StyledBtn>
            <GrView />
            <span>View</span>
          </StyledBtn>
        </NoShadowWrapper>
      </Wrapper>
    </MarginBottom>
  );
};

EditBar.propTypes = {
  property: PropTypes.object.isRequired,
};

export default EditBar;
