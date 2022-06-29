import "./main.scss";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { fechCountries } from "../../components/api/fechCountries";
import Loading from "../../components/loading";
import CardInfo from "../countriesList/cardInfo";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fechCountries().then((res) => setData(res.data));
  }, []);

  let randomNumber = Math.floor(Math.random() * data.length);
  if (!data.length) {
    return <Loading />;
  } else {
    return (
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }} mt={5} mb={5}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data &&
              data
                .slice(randomNumber, randomNumber + 6)
                .map((element, index) => (
                  <CardInfo countryInfo={element} key={index} />
                ))}
          </Grid>
        </Box>
      </Container>
    );
  }
};
export default Main;
