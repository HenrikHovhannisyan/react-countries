import "./registration.scss";
import React from "react";
import Header from "../../components/leyout/header";
import Footer from "../../components/leyout/footer";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important",
  },
});

const Registration = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box
          sx={{ border: 1, borderColor: "#282828", borderRadius: 1 }}
          textAlign={"center"}
          p={5}
          m={20}
          mx={"auto"}
          maxWidth={500}
        >
          <h2>Registration</h2>
          <form>
            <Box mt={5} mb={5}>
              <ValidationTextField
                name="name"
                label="Name"
                required
                variant="outlined"
                defaultValue=""
                placeholder="Name"
                fullWidth
              />
            </Box>
            <Box mt={5} mb={5}>
              <ValidationTextField
                name="surname"
                label="Surname"
                required
                variant="outlined"
                defaultValue=""
                placeholder="Surname"
                fullWidth
              />
            </Box>
            <Box mt={5} mb={5}>
              <ValidationTextField
                name="email"
                label="Email"
                required
                variant="outlined"
                defaultValue=""
                placeholder="test@gmail.com"
                fullWidth
              />
            </Box>
            <Box mt={5} mb={5}>
              <ValidationTextField
                name="password"
                type="password"
                label="Password"
                required
                variant="outlined"
                defaultValue=""
                placeholder="Password"
                fullWidth
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to={"/login"} style={{ color: "tomato" }}>
                Do you have an asunta?
              </Link>
              <Button variant="contained" color="success">
                Registration
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Registration;
