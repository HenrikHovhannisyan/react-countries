import "./countriesList.scss";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Footer from "../../components/leyout/footer";
import Header from "../../components/leyout/header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { fechCountries } from "../../components/api/fechCountries";
import CountriesSearch from "./countriesSearch ";
import CardInfo from "./cardInfo";
import Loading from "../loading";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(6);
  const [changeValue, setChangeValue] = useState("");

  useEffect(() => {
    fechCountries().then((res) => setCountries(res.data));
  }, []);

  const changeHendler = (e) => {
    setChangeValue(e.target.value);
  };

  if (!countries.length) {
    return <Loading />;
  } else {
    return (
      <>
        <Header />
        <Container maxWidth="xl">
          <CountriesSearch
            searchFun={changeHendler}
            searchValue={changeValue}
          />
          <Box sx={{ flexGrow: 1 }} mt={5} mb={5}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {countries &&
                countries
                  .filter((item) => {
                    return item.country.toLowerCase().includes(changeValue);
                  })
                  .map((element, index) => (
                    <CardInfo countryInfo={element} key={index} />
                  ))
                  .slice(0, show)}
            </Grid>
            <Box textAlign="center" mt={5}>
              <Button
                variant="contained"
                color="success"
                onClick={() => setShow(show + 6)}
              >
                Show All
              </Button>
            </Box>
          </Box>
        </Container>
        <Footer />
      </>
    );
  }
};

export default CountriesList;
