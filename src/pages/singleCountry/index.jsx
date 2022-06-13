import "./singleCountry.scss";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/leyout/header";
import Footer from "../../components/leyout/footer";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SingleCountry = () => {
  const { country } = useParams();

  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{minHeight: '65vh'}}>
        <Card sx={{ maxWidth: 345, mx: "auto", mt: 5, mb: 5 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://countryflagsapi.com/png/${country}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default SingleCountry;
