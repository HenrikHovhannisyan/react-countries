import "./countriesList.scss";
import React from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";

const CountriesSearch = ({ searchFun, searchValue }) => {
  return (
    <Box textAlign={"center"} mt={3}>
      <TextField
        sx={{ width: "30%" }}
        id="outlined-search"
        label="Search"
        type="search"
        value={searchValue}
        onChange={(e) => searchFun(e)}
      />
    </Box>
  );
};

export default CountriesSearch;
