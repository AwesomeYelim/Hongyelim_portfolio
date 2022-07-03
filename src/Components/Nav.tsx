import React from "react";
import styled from "styled-components";
import logo from "../Assets/Images/signlogo.svg";
// import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <>
      {/* <Link to='/'> */}
      <NavWrap />
      <Logo />
      <Menu name='PROFILE' />
      <Menu name='SKILLSET' />
      <Menu name='PROJECT' />

      {/* </Link> */}
    </>
  );
};
const NavWrap = styled.div`
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
  width: 30px;
  margin: 0 10px;
  z-index: 99;
`;
const Menu = styled.button`
  // font-family: 'Padauk', sans-serif;
  // font-weight: bold;
  position: absolute;
  font-family: "Notable", sans-serif;
  bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  color: white;
  z-index: 99;
`;

export default Nav;
