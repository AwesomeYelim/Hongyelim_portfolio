import styled from "styled-components";
import React, { useState } from "react";

const ButtonStyled = styled('button')`
  .className {
    color: red;
}
`
export const Button = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <ButtonStyled className={clicked ? 'className' : ''}  onClick={() => setClicked(!clicked)}>
      {/* {this.props.children} */}
    </ButtonStyled>
)}