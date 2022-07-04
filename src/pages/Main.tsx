import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";

const Main: React.FC = () => {
  return (
    <>
      <Wrap>
        <Nav />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;
export default Main;
