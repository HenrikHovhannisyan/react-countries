import "./countriesList.scss";
import React from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

const CountriesSearch = ({ searchFun, searchValue }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={5} mx={'auto'}>
        <Box textAlign={"center"} mt={3}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-search"
            label="Search"
            type="search"
            value={searchValue}
            onChange={(e) => searchFun(e)}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CountriesSearch;
