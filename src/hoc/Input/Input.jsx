import React from 'react';
import styled, { css } from 'styled-components';


const Container = styled.div`
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  height: 35px;
  padding: 0 15px;
  height: 40px;
  border-color: #dfdfdf;
`;

const InputField = styled.input`
  border-radius: none;
  background-color: rgb(255, 255, 255);
  height: 35px;
  padding: 0 15px;
  height: 40px;
  border-color: #dfdfdf;
  ${(props) =>
    ({
      smLeft: css`
        width: 170px;
        margin-right: 10px;
      `,
      smRight: css`
        width: 170px;
      `,
      lg: css`
        width: 350px;
      `,
    }[props.size])}

  ${(props) =>
    props.error &&
    css`
      background-color: rgba(255, 0, 0, 0.05);
    `}
`;

const IconLeft =styled.img`
   width:20px;
   height:20px;
`;
const IconRight =styled.img`
`;

const Input = ({defaultText,iconleft,iconright}) => (
   <Container className="Input container">
     <IconLeft className="Input left img" src={iconleft}></IconLeft>
     <InputField placeholder={defaultText}/>
     <IconRight src={iconright}/>

   </Container>
);


export default Input;
