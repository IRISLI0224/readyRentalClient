import styled from 'styled-components';

export const StyledText = styled.p`
  display: inline-block;
  font-size: 1rem;
  font-family: 'Arimo', sans-serif;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 5px;
  color: #566271;
`;
export const BoldText = styled(StyledText)`
  font-weight: 700;
  color: #263037;
  font-size: 1.2rem;
`;
export const HeaderText = styled(StyledText)`
  font-size: 1.1rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.3;
  color: #263037;
`;
