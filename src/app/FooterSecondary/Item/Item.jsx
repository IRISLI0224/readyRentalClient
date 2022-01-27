import styled from 'styled-components';

const Item = styled.button`
  color: #3b3b3b;
  font-size: 17px;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  padding: 0 1rem;
  cursor: pointer;
  &:hover,
  &::selection {
    color: #474747;
    text-shadow: none;
  }
`;

export default Item;
