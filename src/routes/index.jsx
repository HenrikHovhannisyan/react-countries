import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CountriesList from "../pages/countriesList";
import Login from "../pages/login";
import Registration from "../pages/registration";
import SingleCountry from "../pages/singleCountry";
import { ThemeContext } from "../context/ThemeContext";
import State from "../components/reactHooks/state";
import Effect from "../components/reactHooks/effect";
import Context from "../components/reactHooks/context";
import Ref from "../components/reactHooks/ref";

const RouteList = () => {
  const { isTheme } = useContext(ThemeContext);

  return (
    <div
      style={
        isTheme ? { backgroundColor: "white" } : { backgroundColor: "black" }
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/countries-list" element={<CountriesList />} />
          <Route
            path="/single-country/:countryName"
            element={<SingleCountry />}
          />
          <Route path="/hooks">
            <Route path="state" element={<State />} />
            <Route path="effect" element={<Effect />} />
            <Route path="context" element={<Context />} />
            <Route path="ref" element={<Ref />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RouteList;
