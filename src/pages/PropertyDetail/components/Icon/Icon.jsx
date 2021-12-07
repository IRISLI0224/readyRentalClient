import styled from "styled-components";

const StyledIcon = styled.i`
  color: #566271;
  size: 1.2rem;

  ${props => props.primary && css`
  size:1.5rem;
  color: #263037;
  `}
`;

export default StyledIcon;