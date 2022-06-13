import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CountriesList from "../pages/countriesList";
import SingleCountry from "../pages/singleCountry";


 const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/countries-list" element={<CountriesList />} />
        <Route path="/single-country/:country" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteList
