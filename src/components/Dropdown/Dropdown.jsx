// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assests/img/iconBefore.svg';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 200px;
  width: 56px;
  height: 40px;
`; // end DropdownContainer

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  top: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid black;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black;
`;

export const MenuContainer = styled.div`
    ${(props) => (props.isOpen ? `display: none;` : `display: inherit;`)}}   
    width: 240px;
    bottom: -1px;
    right: -15px;
    z-index: 1000;
    position: absolute;
    box-sizing: border-box;
    text-align: justify;
    overflow: visible;
    height: 0px;
`;
export const MenuUl = styled.ul`
    background: #fff;
    border: 1px solid #ccc;
    font-weight: 400;
    box-shadow: rgb(0 0 0 / 10%) 0 4px 0;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    list - style - type: none;
`;
export const MenuLi = styled.li`
  display: block;
  height: 53px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MenuLink = styled.a`
    display: block;
    position: relative;
    background-color: #fff;
    line-height: 48px;
    font-size: 16px;
    padding: 20px
    color: #3b3b3b;
    border-bottom: 1px solid #e3e3e3;
    transition-duration: .1s;
`;
export const MenuSpan = styled.span` 
  position: absolute;
font-size: 18px;
line-height: 48px;
top: -1px;
color: #3b3b3b;
float: none;
font-family: 
text-align: left;
padding-left:25px;
`;

//hand tabbing accessibility to dropdown

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <DropdownContainer>
      <ProfileButton type="button" onClick={toggleOpen}>
        <Icon />
        <ArrowDown />
      </ProfileButton>

      <MenuContainer isOpen={!isOpen}>
        <MenuUl>
          <MenuLi>
            <MenuLink href="#">
              <MenuSpan>Track your property</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="#">
              <MenuSpan>Manage rental listings</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="#">
              <MenuSpan>Rental applications</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="#">
              <MenuSpan>Account settings</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="#">
              <MenuSpan>Log out</MenuSpan>
            </MenuLink>
          </MenuLi>
        </MenuUl>
      </MenuContainer>
    </DropdownContainer>
  );
};
export default Dropdown;
