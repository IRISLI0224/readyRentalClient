import styled from 'styled-components';

const StyledText = styled.p`
  display: inline-block;
  font-size: ${(props) => props.size};
  font-family: 'Arimo', sans-serif;
  line-height: 1.3;
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: 5px;
  color: ${(props) => (props.bold ? '#263037' : '#566271')};
`;

export default StyledText;
