import styled from 'styled-components';

export const NewsContainer = styled.div`
  //overflow: hidden;
  width: 55rem;
  height: 60rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
  display: none;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NewsCardTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 1.3rem;
  color: props.theme.footerBlue;
`;

export const NewsCard = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 60px;
  position: relative;
  &:hover {
    h3 {
      color: #e4002b;
    }
  }
  &:visited {
    color: #fff;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    opacity: 0;
    z-index: 1;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const NewsCardImg = styled.div`
  width: 40%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`;

export const NewsCardContent = styled.div`
  width: 65%;
  height: 100%;
  padding: 0px 20px 0px 20px;
  line-height: 1.25em;
  h3 {
    margin: 0;
    padding-bottom: 0.4rem;
    line-height: 1.25;
    font-size: 1.5rem;
  }
  span {
    font-size: 0.75em;
    color: #969fa9;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }
  p {
    color: #697684;
    font-size: 1em;
    line-height: 1.5;
    margin: 0;
    padding-top: 0.8rem;
  }
`;

export const SearchTitle = styled.div`
  width: 100%;
  height: 1.5rem;
  text-align: center;
  margin: auto;
  margin-top: 2.5rem;
  color: #808080;
  font-size: 0.7rem;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 150px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
  background-color: #f0fff0;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchText = styled.input`
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  color: black;
  width: 95%;
  height: 50px;
  font-weight: 400;
  font-size: 1em;
  margin: auto;
  padding: 0px 15px 0px 35px;
`;

export const TypeFilter = styled.div`
  width: 100%;
  height: 10rem;
  padding-left: 1rem;
  padding-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0.8rem;
`;

export const TypeFilterTitle = styled.div`
  width: 100%;
  height: 20%;
  h2 {
    margin: 0;
  }
`;

export const TypeFilterItem = styled.div`
  text-align: left;
  width: 48%;
  &.range {
    height: 4.3rem;
    label {
      width: 98%;
    }
    select {
      width: 98%;
      height: 2.5rem;
    }
  }
  &.oneDrop {
    width: 100%;
    select {
      width: 100%;
      height: 2.5rem;
    }
  }
`;

export const RangeDropDown = styled.div`
  width: 100%;
  height: 8rem;
  padding-left: 1rem;
  padding-right: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.5rem 0.8rem 0.6rem 0.8rem;
  &#lastDrop {
  }
`;

export const SubmitSearch = styled.div`
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 0.1rem solid #808080;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  Button {
    height: 3rem;
  }
`;
