import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";

const Main: React.FC = () => {
  return (
    <Wrap>
      <Nav />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #160044;
  opacity: 0.4;
`;
export default Main;
