import React from "react";
import styled from "styled-components";
import logo from "../Assets/Images/signlogo.svg";
// import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <>
      {/* <Link to='/'> */}
      <Navwrap>
        <Logo />
        <Profile>Profile</Profile>
      </Navwrap>

      {/* </Link> */}
    </>
  );
};
const Navwrap = styled.div`
  position: relative;
 
`;
const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  position: absolute;
  width: 30px;
  margin: 0 10px;
  // opacity: 1;
`;
const Profile = styled.button`
  // font-family: 'Padauk', sans-serif;
  // font-weight: bold;
  font-family: "Notable", sans-serif;
  padding: 10px;
  font-size: 1rem;
  color: white;
`;

export default Nav;
