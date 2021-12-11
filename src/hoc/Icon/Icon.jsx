import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${props => props.primary ? "#263037" : "#566271"};
  font-size: ${props => props.primary ? "1.5rem" : "1.2rem"};
`;

export default StyledIcon;
