import styled from 'styled-components';
import FlexWrap from '../../../../hoc/FlexWrap';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f6f7;
  justify-content: center;
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30vw;
  @media screen and (max-width: 1024px) {
    width: 32vw;
  }
  padding-top: 1rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  border-bottom: none;
  text-align: left;
`;

export const ImageContainer = styled.div`
  width: 60vw;
  @media screen and (max-width: 1024px) {
    width: 62vw;
  }
`;

export const VerticalMargin = styled.div`
  margin: ${(props) => props.margin} 0;
`;

export const BodyContainer = styled(FlexWrap)`
  margin-top: 1.5rem;
`;

export const DescItem = styled.div`
  border-top: 1px solid #bdbdbd;
  padding: 1rem 0;
  width: 70vw;
  text-align: left;
`;
