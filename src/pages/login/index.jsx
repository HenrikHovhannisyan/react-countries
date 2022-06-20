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

const useValidation = (value, validations) => {
  const [isEmpaty, setEmpaty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpaty(false) : setEmpaty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    isEmpaty || maxLengthError || maxLengthError || emailError
      ? setInputValid(false)
      : setInputValid(true);
  }, [isEmpaty, maxLengthError, minLengthError, emailError]);

  return {
    isEmpaty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const Login = () => {
  const mail = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const pass = useInput("", { isEmpty: true, minLength: 5, maxLength: 8 });

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
              {mail.isDirty && mail.isEmpaty && (
                <Alert severity="error" sx={{ marginBottom: 0.5 }}>
                  The field cannot be empty
                </Alert>
              )}
              {mail.isDirty && mail.minLengthError && (
                <Alert severity="error" sx={{ marginBottom: 0.5 }}>
                  Incorrect length
                </Alert>
              )}
              {mail.isDirty && mail.emailError && (
                <Alert severity="error" sx={{ marginBottom: 0.5 }}>
                  Incorrect email
                </Alert>
              )}
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
              />
            </Box>
            <Box mt={5} mb={5}>
              {pass.isDirty && pass.isEmpaty && (
                <Alert severity="error" sx={{ marginBottom: 0.5 }}>
                  The field cannot be empty
                </Alert>
              )}
              {pass.isDirty && pass.minLengthError && (
                <Alert severity="error" sx={{ marginBottom: 0.5 }}>
                  Incorrect length
                </Alert>
              )}
              {pass.isDirty && pass.maxLengthError && (
                <Alert severity="error" sx={{ marginBottom: 0.5 }}>
                  Too long password
                </Alert>
              )}
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
