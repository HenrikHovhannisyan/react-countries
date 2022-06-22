import "./login.scss";
import React, { useEffect, useState } from "react";
import Header from "../../components/leyout/header";
import Footer from "../../components/leyout/footer";
import { Container } from "@mui/system";
import { Alert, Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useValidation from "../../customHooks/useValidation";

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
  const mail = useValidation("", {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
  });
  const pass = useValidation("", { isEmpty: true, minLength: 5, maxLength: 8 });

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
          <form>
            <h2>Login</h2>
            <Box mt={5} mb={5}>
              {mail.isDirty &&
                mail.isEmpaty &&
                mail.errorMessage("The field cannot be empty")}
              {mail.isDirty &&
                mail.minLengthError &&
                mail.errorMessage("Incorrect length")}
              {mail.isDirty &&
                mail.emailError &&
                mail.errorMessage("Incorrect email")}
              <ValidationTextField
                onChange={(e) => mail.onChange(e)}
                onBlur={(e) => mail.onBlur(e)}
                defaultValue={mail.value}
                name="email"
                type="text"
                label="Email"
                required
                variant="outlined"
                placeholder="test@gmail.com"
                fullWidth
                sx={{ marginTop: 0.5 }}
              />
            </Box>
            <Box mt={5} mb={5}>
              {pass.isDirty &&
                pass.isEmpaty &&
                pass.errorMessage("The field cannot be empty")}
              {pass.isDirty &&
                pass.minLengthError &&
                pass.errorMessage("Incorrect length")}
              {pass.isDirty &&
                pass.maxLengthError &&
                pass.errorMessage("Too long password")}
              <ValidationTextField
                onChange={(e) => pass.onChange(e)}
                onBlur={(e) => pass.onBlur(e)}
                defaultValue={pass.value}
                name="password"
                type="password"
                label="Password"
                required
                variant="outlined"
                placeholder="Password"
                fullWidth
                sx={{ marginTop: 0.5 }}
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
              <Button
                disabled={!mail.inputValid || !pass.inputValid}
                variant="contained"
                type="submit"
                color="success"
              >
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
