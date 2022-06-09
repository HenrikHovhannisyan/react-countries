import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CountriesList from "../pages/countriesList";


 const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/countries-list" element={<CountriesList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteList
