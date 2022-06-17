import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CountriesList from "../pages/countriesList";
import Login from "../pages/login";
import Registration from "../pages/registration";
import SingleCountry from "../pages/singleCountry";


 const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/countries-list" element={<CountriesList/>} />
        <Route path="/single-country/:countryName" element={<SingleCountry/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteList
