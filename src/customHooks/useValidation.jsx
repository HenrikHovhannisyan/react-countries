import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

const useValidation = (initialValue, validationsObjact) => {
    
  const useValidations = (value, validations) => {
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
    const valid = useValidations(value, validations);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = (e) => {
      setDirty(true);
    };

    const errorMessage = (message) => {
      return (
        <Alert severity="error" sx={{ marginBottom: 0.5 }}>
          {message}
        </Alert>
      );
    };

    return {
      value,
      isDirty,
      ...valid,
      onChange,
      onBlur,
      errorMessage,
    };
  };

  return useInput(initialValue, validationsObjact);
};

export default useValidation;
