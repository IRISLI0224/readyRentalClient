import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => (props.primary ? '#ffff' : '#333f48')};
  border: 2px solid #c3c8ce;
  display: inline-block;
  text-decoration: none;
  width: ${(props) => props.size};
  padding: 0.875em 1em;
  font-weight: 400;
  font-size: 1em;
  cursor: pointer;
  border-radius: 4px;
  line-height: 1;
  background: transparent;
  text-align: center;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-in, ease-out;
  /* margin-top: 30px; */
  &:hover {
    border-color: #333f48;
    color: #333f48;
  }

  &.primary {
    color: #ffff;
    background: ${(props) => props.theme.primaryColor};

    &:hover {
      background: #a30000;
      border-color: #a30000;
      color: #fff;
    }
  }
`;

export default Button;
