import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 0 15px;
  height: 50px;
  border-radius: none;
  border: 2px solid #e5e8ec;
`;

const InputField = styled.input`
  border-radius: none;
  background-color: rgb(255, 255, 255);
  padding: 0 15px;
  height: 40px;
  border: none;
  outline:none;
  width:${(props) => props.size};
`;

const IconLeft =styled.img` 
   margin-top:11px;
   width:20px;
   height:20px;
`;
const IconRight =styled.img`
`;

const Input = ({defaultText,iconleft,iconright,size}) => (
   <Container className="Input container">
     <IconLeft className="Input left img" src={iconleft}></IconLeft>
     <InputField placeholder={defaultText} size={size}/>
     <IconRight src={iconright}/>
   </Container>
);


export default Input;
