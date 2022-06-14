import "./countriesList.scss";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const CardInfo = ({ countryInfo }) => {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/single-country/${countryInfo.country}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={`https://countryflagsapi.com/png/${countryInfo.iso2}`}
              alt="green iguana"
              className="country_flag"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {countryInfo.country}
              </Typography>
              <h4>iso2 - {countryInfo.iso2}</h4>
              <h4>iso3 - {countryInfo.iso3}</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                className="cities"
              >
                <b>Cities</b> - {countryInfo.cities.map((item) => item + ", ")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default CardInfo;
