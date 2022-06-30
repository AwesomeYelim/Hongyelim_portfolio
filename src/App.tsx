import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./Styles/Globalstyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
