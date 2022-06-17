import "./main.scss";
import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { fechCountries } from "../../components/api/fechCountries";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <Link to={`/single-country/${element.country}`}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={`https://countryflagsapi.com/png/${element.iso2}`}
                            alt="green iguana"
                            className="country_flag"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
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
                      </Link>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Container>
    );
  }
};
export default Main;
