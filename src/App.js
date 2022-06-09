import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/leyout/footer";
import Header from "./components/leyout/header";
import Main from "./components/main";
import CountriesList from "./pages/countriesList";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
