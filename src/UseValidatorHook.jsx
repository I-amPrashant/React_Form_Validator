import React, { useState, useEffect } from "react";

const useValidator = (formData, setFormData) => {
  const [errorName, setErrorName] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const validator = () => {
    let newFormData = { ...formData };
    let validUsername = /^[A-Z][a-z]{3,}$/;
    let validEmail = /^(?=.*[A-Z]).{5,}@gmail\.com$/;
    let validPassword = /^(?=.*[A-Z])(?=.*[\W_]).{7,}$/;

    //first name
    if (!validUsername.test(formData["FirstName"].value)) {
      newFormData["FirstName"] = {
        value: formData["FirstName"].value,
      };
      setErrorValue(
        "first name should have at least 4 character and start with Uppercase"
      );
      setErrorName((prevName) => (prevName ? prevName : "FirstName"));
    } else {
      newFormData["FirstName"] = {
        value: formData["FirstName"].value,
      };
      setErrorValue("");
      setErrorName("");
    }

    //last name
    if (!validUsername.test(formData["LastName"].value)) {
      newFormData["LastName"] = {
        value: formData["LastName"].value,
      };
      setErrorValue((prevError) =>
        prevError
          ? prevError
          : "last name should have at least 4 character and start with Uppercase"
      );
      setErrorName((prevName) => (prevName ? prevName : "LastName"));
    } else {
      newFormData["LastName"] = {
        value: formData["LastName"].value,
      };
    }

    //date of birth
    if (!formData["DOB"].value) {
      newFormData["DOB"] = {
        value: formData["DOB"].value,
      };
      setErrorValue((prevError) =>
        prevError ? prevError : "Date of Birth is required"
      );
      setErrorName((prevName) => (prevName ? prevName : "DOB"));
    } else {
      newFormData["DOB"] = { value: formData["DOB"].value,};
    }

    //citizenship number
    if (formData["Citizenship"].value.length != 14) {
      newFormData["Citizenship"] = {
        value: formData["Citizenship"].value,
      };
      setErrorValue((prevError) =>
        prevError
          ? prevError
          : "citizenship number should be 14 characters long"
      );
      setErrorName((prevName) => (prevName ? prevName : "Citizenship"));
    } else {
      newFormData["Citizenship"] = {
        value: formData["Citizenship"].value,
      };
    }

    //email
    if (!validEmail.test(formData["Email"].value)) {
      newFormData["Email"] = {
        value: formData["Email"].value,
      };
      setErrorValue((prevError) =>
        prevError ? prevError : "invalid email address"
      );
      setErrorName((prevName) => (prevName ? prevName : "Email"));
    } else {
      newFormData["Email"] = { value: formData["Email"].value,  };
    }

    //password
    if (!validPassword.test(formData["Password"].value)) {
      newFormData["Password"] = {
        value: formData["Password"].value,
      };
      setErrorValue((prevError) =>
        prevError
          ? prevError
          : "password should have at least 10 character and one special character"
      );
      setErrorName((prevName) => (prevName ? prevName : "Password"));
    } else {
      newFormData["Password"] = {
        value: formData["Password"].value,
      };
    }

    //Confirm password
    if (!validPassword.test(formData["CPassword"].value)) {
      newFormData["CPassword"] = {
        value: formData["CPassword"].value,
      };
      setErrorValue((prevError) =>
        prevError
          ? prevError
          : "password should have at least 10 character and one special character"
      );
      setErrorName((prevName) => (prevName ? prevName : "CPassword"));
    } else {
      newFormData["CPassword"] = {
        value: formData["CPassword"].value,
      };
    }

    setFormData(newFormData);
  };
  useEffect(() => {
    !errorValue?setFormSubmitted(true):setFormSubmitted(false);
  }, [errorValue])
  return { validator, errorName, errorValue, formSubmitted };
};
export default useValidator;
