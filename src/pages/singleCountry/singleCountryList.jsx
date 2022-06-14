import "./singleCountry.scss";
import React from "react";

const SingleCountryList = ({list}) => {
  return (
    <ul>
      <li>{list.name.official}</li>
      <li>Population - {list.population}</li>
      <li>Capital - {list.capital}</li>
      <li>Region - {list.region}</li>
      <li>Start Of Week - {list.startOfWeek}</li>
      <li>Domen - {list.tld[0]}</li>
      <ul>
        Maps{" "}
        <li>
          <a href={list.maps.googleMaps} target="_blank">
            Google
          </a>
        </li>
        <li>
          <a href={list.maps.openStreetMaps} target="_blank">
            Open Street Maps
          </a>
        </li>
      </ul>
    </ul>
  );
};

export default SingleCountryList;
