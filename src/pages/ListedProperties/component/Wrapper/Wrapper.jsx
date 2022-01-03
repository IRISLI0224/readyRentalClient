import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
  padding: 0.45rem;
`;

export const WrapperColumnFlex = styled(Wrapper)`
  flex-direction: column;
  box-shadow: none;
`;

export const PopUpContainer = styled(Wrapper)`
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 50%) 0px 0.2rem 0.2rem 0px;
  width: 50%;
`;

export const NoShadowWrapper = styled(Wrapper)`
  box-shadow: none;
  justify-content: space-between;
`;

export const NoShadowWrapperSpaceAround = styled(NoShadowWrapper)`
  justify-content: space-around;
`;
