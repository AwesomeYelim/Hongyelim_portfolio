import React from "react";
import styled from "styled-components";
import logo from "../Assets/Images/signlogo.svg";
// import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <>
      
      <NavCover />
      <Logo />
      <MenuItem>HONGYELIMPORTFORIOHONGYELIMPORTFORIO</MenuItem>
      <MenuWrap>
        <Menu>PROFILE</Menu>
        <Menu>SKILLSET</Menu>
        <Menu>PROJECT</Menu>
      </MenuWrap>

      
    </>
  );
};
const NavCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #160044;
  opacity: 0.4;
`;
const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  z-index: 99;
`;

const MenuWrap = styled.button`
  position: fixed;
  width: 80%;
  display: flex;
  justify-content: space-between;
  left: 10%;
  bottom: 20px;
  font-family: "Notable", sans-serif;
`;
const MenuItem = styled.button`
  font-family: "Padauk", sans-serif;
  // font-weight: bold;
  padding: 10px;
  font-size: 0.2rem;
  color: white;
`;
const Menu = styled.button`
  // font-weight: bold;
  font-family: "Notable", sans-serif;
  padding: 10px;
  font-size: 1.2rem;
  color: white;
`;

export default Nav;