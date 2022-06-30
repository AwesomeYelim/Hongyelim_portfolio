import { createGlobalStyle } from "styled-components";
import Background from "../Assets/Images/background.jpg";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    border: none;
    background-color: transparent;
  }

  body {
    height: 100vh;
    line-height: 1.5;
    background: no-repeat center url(${Background});
    background-size: cover;
  }
`;

export default GlobalStyle;
