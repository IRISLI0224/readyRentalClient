import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${props => props.primary ? "#696969" : "#566271"};
  font-size: ${props => props.primary ? "1.8rem" : "1.2rem"};
  padding-right: ${props => props.primary ? "0.5rem" : "0.3rem"};
`;

export default StyledIcon;
