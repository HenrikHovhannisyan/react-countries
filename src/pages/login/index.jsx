import "./login.scss";
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

const Login = () => {
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
          <h2>Login</h2>
          <form>
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
              <Link to={"/registration"} style={{ color: "tomato" }}>
                Don't have an asunt?
              </Link>
              <Button variant="contained" color="success">
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
