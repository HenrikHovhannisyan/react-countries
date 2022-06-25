import { useEffect, useState } from "react";
import { EMAIL_REGEXP } from '../constants';

const useValidation = (initialValue, validationsObjact) => {

  const useValidations = (value, validations) => {
    const [emptyError, setEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);

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
            value ? setEmptyError(false) : setEmptyError(true);
            break;
          case "isEmail":
            EMAIL_REGEXP.test(String(value).toLowerCase())
              ? setEmailError(false)
              : setEmailError(true);
            break;
            default: break;
        }
      }
    }, [value, validations]);

    useEffect(() => {
      emptyError || maxLengthError || maxLengthError || emailError
        ? setIsInputValid(false)
        : setIsInputValid(true);
    }, [emptyError, maxLengthError, minLengthError, emailError]);

    return {
      emptyError,
      minLengthError,
      maxLengthError,
      emailError,
      isInputValid,
    };
  };

  const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidations(value, validations);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = () => {
      setDirty(true);
    };

    return {
      value,
      isDirty,
      ...valid,
      onChange,
      onBlur,
    };
  };

  return useInput(initialValue, validationsObjact);
};

export default useValidation;
