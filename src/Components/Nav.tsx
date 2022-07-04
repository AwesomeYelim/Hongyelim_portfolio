import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import logo from "../Assets/Images/signlogo.svg";
// import { Link } from "react-router-dom";




// function MyComponent (props) {
//   const [isActive, setActive] = useState(false);

//   const toggleClass = () => {
//     setActive(!isActive);
//   };

//   return (
//     <div 
//       className={isActive ? 'your_className': null} 
//       onClick={toggleClass} 
//     >
//       <p>{props.text}</p>
//     </div>
//    );
// }  

const Nav: React.FC = () => {
  
  return (
    <>
      <NavCover />
      <Logo />
      <ModeBtn />
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
  top: 30px;
  left: 30px;
  width: 30px;
  z-index: 99;
`;

const ModeBtn = styled.button`
  position: absolute;
  width: 70px;
  height: 40px;
  top: 50px;
  right: 40px;
  background-color: #fff;
  border-radius: 73px;
  z-index: 99;
  &:after{  
    content: " ";
    position: absolute;
    display: block;
    top: 2.5px;
    left: 4px;
    width: 35px;
    height: 35px;
    background-color: #1F2333;
    border-radius: 50%;
  }
`;

const MenuItem = styled.span`
  position: absolute;
  bottom: 90px;
  display: block;
  width: 100%;
  text-align: center;
  font-family: "Padauk", sans-serif;
  // font-weight: bold;
  letter-spacing: 25px;
  font-size: 0.7rem;
  color: white;
  z-index: 99;
`;

const MenuWrap = styled.div`
  position: fixed;
  width: 80%;
  display: flex;
  justify-content: space-between;
  left: 10%;
  bottom: 20px;
  font-family: "Notable", sans-serif;
  z-index: 99;
`;

const Menu = styled.button`
  // font-weight: bold;
  font-family: "Notable", sans-serif;
  margin: 20px 0;
  font-size: 1.2rem;
  color: white;
  z-index: 99;
`;

export default Nav;
