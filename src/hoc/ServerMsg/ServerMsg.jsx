import styled, { css } from 'styled-components';

const ServerMsg = styled.div`
  width: 80%;
  max-width: 80%;
  height: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 2rem;
  border-radius: 4px;
  font-size: 15px;
  line-height: 1.2rem;
  ${(props) =>
    ({
      error: css`
        color: rgb(212, 57, 0);
      `,
      success: css`
        color: green;
      `,
    }[props.status])}
`;

export default ServerMsg;
