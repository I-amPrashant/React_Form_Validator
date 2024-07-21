import React, { useState, useEffect } from "react";
import FormItem from "./FormItem";
import useValidator from "./UseValidatorHook";
export default function App() {
  const [dropdown, setDropdown] = useState(false);
  const [cityName, setCityName] = useState("Chitwan");
  const [formData, setFormData] = useState({
    FirstName: { value: "", error: "" },
    LastName: { value: "", error: "" },
    DOB: { value: "", error: "" },
    City: cityName,
    Gender: { value: "Male", error: "" },
    Citizenship: { value: "", error: "" },
    Email: { value: "", error: "" },
    Password: { value: "", error: "" },
    CPassword: { value: "", error: "" },
  });
  const cities = [
    "Chitwan",
    "Kathmandu",
    "Birjung",
    "Birtamode",
    "Humla",
    "Gorkha",
  ];
  const { validator, errorName, errorValue, setErrorName } = useValidator(
    formData,
    setFormData
  );

  const handleDropdown = () => {
    setDropdown(true);
  };

  const handleRadio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: { value: e.target.value, error: "" },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formSubmitted= validator();
    setTimeout(() => {
      if(formSubmitted){
        alert(JSON.stringify(formData));
      }
    }, 500);
  };

  return (
    <>
      <div className="container">
        <h1>Form Validation</h1>
        {errorValue && <p className="error">{errorValue}</p>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormItem
            type="text"
            value={formData["FirstName"].value}
            name="FirstName"
            labelText="First Name: "
            placeholder="enter your first name..."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            minLength={3}
            maxLength={10}
            handleSubmit={handleSubmit}
          />
          <FormItem
            type="text"
            value={formData["LastName"].value}
            name="LastName"
            labelText="Last Name: "
            placeholder="enter your last name..."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            minLength={3}
            maxLength={10}
            handleSubmit={handleSubmit}
          />
          <FormItem
            type="date"
            value={formData["DOB"].value}
            name="DOB"
            labelText="Date of Birth: "
            placeholder="enter your dob..."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            handleSubmit={handleSubmit}
          />
          <div className="form-item">
            <label>City: </label>
            <div className="custom-select" onClick={handleDropdown}>
              <p>
                {cityName} &nbsp;<i className="fa-solid fa-chevron-down"></i>
              </p>
              {dropdown && (
                <div className="option-container">
                  {cities.map((item) => {
                    return (
                      <div
                        key={item}
                        className="option-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCityName(item);
                          setDropdown(false);
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="form-item">
            <label>Gender: </label>
            <div style={{ display: "flex", gap: "25px" }}>
              <input
                type="radio"
                name="Gender"
                id="Male"
                onChange={(e) => handleRadio(e)}
                defaultChecked
              />
              <label htmlFor="Male" className="custom-radio-label">
                Male
              </label>
              <input
                type="radio"
                name="Gender"
                id="Female"
                onChange={(e) => handleRadio(e)}
              />
              <label htmlFor="Female" className="custom-radio-label">
                Female
              </label>
            </div>
          </div>
          <FormItem
            type="number"
            value={formData["Citizenship"].value}
            name="Citizenship"
            labelText="Citizenship No: "
            placeholder="enter your citizenship no..."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            min={14}
            handleSubmit={handleSubmit}
            max={14}
          />
          <FormItem
            type="email"
            value={formData["Email"].value}
            name="Email"
            labelText="Email: "
            placeholder="enter your email.."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            maxLength={25}
            handleSubmit={handleSubmit}
          />

          <FormItem
            type="password"
            value={formData["Password"].value}
            name="Password"
            labelText="Password: "
            placeholder="enter your password.."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            maxLength={20}
            handleSubmit={handleSubmit}
          />

          <FormItem
            type="password"
            value={formData["CPassword"].value}
            name="CPassword"
            labelText="Confirm Password: "
            placeholder="confirm your password.."
            formData={formData}
            setFormData={setFormData}
            errorName={errorName}
            setErrorName={setErrorName}
            maxLength={20}
            handleSubmit={handleSubmit}
          />
          <div className="form-item">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
