import styled from 'styled-components';

const Item = styled.button`
  color: #cbcfd4;
  font-size: 17px;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  padding: 0 1rem;
  cursor: pointer;
  &:hover,
  &::selection {
    color: #fff;
    text-shadow: none;
  }
`;
export default Item;
