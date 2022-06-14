import "./singleCountry.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/leyout/header";
import Footer from "../../components/leyout/footer";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { singleCountry } from "../../components/api/singleCountry";
import SingleCountryList from "./singleCountryList";
import Loading from "../loading";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    singleCountry(countryName).then((res) => setCountry(res[0]));
  }, []);
  if (!country.name) {
    return <Loading />;
  } else {
    return (
      <>
        <Header />
        {country.name && (
          <Container maxWidth="xl" sx={{ minHeight: "65vh" }}>
            <Card sx={{ maxWidth: 345, mx: "auto", mt: 5, mb: 5 }}>
              <CardMedia
                component="img"
                image={country.flags.png}
                alt="Country Flug"
              />
              <CardMedia
                component="img"
                image={country.coatOfArms.png}
                alt="Country Flug"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Info of {country.name.common}
                </Typography>
                <SingleCountryList list={country} />
              </CardContent>
            </Card>
          </Container>
        )}
        <Footer />
      </>
    );
  }
};

export default SingleCountry;
