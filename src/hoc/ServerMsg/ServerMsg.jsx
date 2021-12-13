import styled, { css } from 'styled-components';

const ServerMsg = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  margin-top: 10px;
  margin: 0.25rem 10px;
  border-radius: 4px;
  font-size: 20px;
  ${(props) =>
    ({
      error: css`
        color: rgb(212, 57, 0);
        background-color: #fdecea;
      `,
      success: css`
        color: green;
        background-color: #e5ffe5;
      `,
    }[props.status])}
`;

export default ServerMsg;
