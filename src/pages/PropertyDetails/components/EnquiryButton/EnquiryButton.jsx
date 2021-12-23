import { ButtonStyle } from '../../../../hoc/Button';
import styled from 'styled-components';

const EnquiryButton = styled(ButtonStyle)`
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  background:${(props) => props.background}
`;

export default EnquiryButton;