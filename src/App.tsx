import React from "react";
import GlobalStyle from "./Styles/Global";
import HomeScreen from "./Screens/HomeScreen";
import ModalProvider from "./ModalContext/ModalContext";
function App() {
  return (
    <ModalProvider>
      <GlobalStyle />
      <HomeScreen />
    </ModalProvider>
  );
}

export default App;
