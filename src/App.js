import React from "react";
import "./App.css";
import Footer from "./components/leyout/footer";
import Header from "./components/leyout/header";
import {ColorContext} from "./context/ThemeContext";
import Main from "./pages/main";

function App() {
  return (
    <ColorContext>
      <Header />
      <Main />
      <Footer />
    </ColorContext>
  );
}

export default App;
