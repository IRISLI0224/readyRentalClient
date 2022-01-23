// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assests/img/iconBefore.svg';
import { ReactComponent as IconBlack } from '../../assests/img/iconBefore_black.svg';
import { removeToken } from '../../utils/authentication';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action';

export const DropdownContainer = styled.div`
  position: relative;
  margin-right: 5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  top: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const MenuContainer = styled.div`
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
    z-index:99;
`;
const MenuUl = styled.ul`
    background: #fff;
    border: 1px solid #ccc;
    font-weight: 400;
    box-shadow: rgb(0 0 0 / 10%) 0 4px 0;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    list - style - type: none;
    z-index:99;
`;
const MenuLi = styled.li`
  display: block;
  height: 53px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  z-index: 99;
`;

const MenuLink = styled.a`
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

const MenuSpan = styled.span` 
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

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  let location = useLocation();
  const wholeUrl = location.pathname;
  const home = wholeUrl == '/' ? true : false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
    removeToken();
    navigate('', { replace: true });
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <DropdownContainer>
      <ProfileButton type="button" onClick={toggleOpen}>
        {home ? <Icon /> : <IconBlack />}
      </ProfileButton>
      <MenuContainer isOpen={!isOpen}>
        <MenuUl>
          <MenuLi>
            <MenuLink href="/property/manage-listings">
              <MenuSpan>Manage rental listings</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="/property/inspection">
              <MenuSpan>Inspection requests</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="/account">
              <MenuSpan>Account settings</MenuSpan>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink href="">
              <MenuSpan>
                <div onClick={Logout}>Log out</div>
              </MenuSpan>
            </MenuLink>
          </MenuLi>
        </MenuUl>
      </MenuContainer>
    </DropdownContainer>
  );
};
export default Dropdown;
