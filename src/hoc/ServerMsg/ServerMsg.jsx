import styled, { css } from 'styled-components';

const ServerMsg = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 2rem;
  margin-top: 10px;
  margin: 0.25rem 10px;
  border-radius: 4px;
  font-size: 15px;
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
