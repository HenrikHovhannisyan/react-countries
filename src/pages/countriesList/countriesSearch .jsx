import "./countriesList.scss";
import React from "react";
import { Box } from "@mui/system";

const CountriesSearch = ({ searchFun, searchValue }) => {
  return (
    <Box textAlign={"center"}>
      <input
        type="text"
        placeholde="Serach"
        value={searchValue}
        onChange={(e) => searchFun(e)}
      />
    </Box>
  );
};

export default CountriesSearch;
