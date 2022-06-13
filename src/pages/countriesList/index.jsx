import "./countriesList.scss";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Footer from "../../components/leyout/footer";
import Header from "../../components/leyout/header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { fechCountries } from "../../components/api/fechCountries";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(6);

  useEffect(() => {
    fechCountries().then((res) => setCountries(res.data));
  });

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }} mt={5} mb={5}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {countries &&
              countries.slice(0, show).map((element, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={`https://countryflagsapi.com/png/${element.iso2}`}
                        alt="green iguana"
                        className="country_flag"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {element.country}
                        </Typography>
                        <h4>iso2 - {element.iso2}</h4>
                        <h4>iso3 - {element.iso3}</h4>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="cities"
                        >
                          <b>Cities</b> -{" "}
                          {element.cities.map((item) => item + ", ")}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
          <Box textAlign="center" mt={5}>
            <Button variant="contained" color="success" onClick={() => setShow(show + 6)}>Show All</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default CountriesList;
