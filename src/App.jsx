import React, { useState, useRef } from "react";
import useValidator from "./UseValidatorHook";
export default function App() {
  const [dropdown, setDropdown] = useState(false);
  const [cityName, setCityName] = useState("Chitwan");
  const firstInputRef = useRef(null);
  const [formData, setFormData] = useState({
    FirstName: {value:'', error:''},
    LastName: {value:'', error:''},
    DOB: {value:'', error:''},
    City: cityName,
    Gender: {value:'', error:''},
    Citizenship:{value:'', error:''},
    Email: {value:'', error:''},
    Password: {value:'', error:''},
    CPassword: {value:'', error:''},
  });
  const {error, validate} = useValidator(formData);

  const cities = [
    "Chitwan",
    "Kathmandu",
    "Birjung",
    "Birtomode",
    "Humla",
    "Gorkha",
  ];
 
  const handleDropdown = () => {
    setDropdown(true);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: {value: e.target.value, error:''},
    });
  };
  const handleRadio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: {value: e.target.value, error:''},
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };
  error && firstInputRef.current.focus();

  return (
    <>
      <div className="container">
        <h1>Form Validation</h1>
       {error && <p className="error">{error}*</p>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-item">
            <label htmlFor="FirstName">First Name: </label>
            <input
              type="text"
              ref={firstInputRef}
              value={formData.FirstName.value}
              name="FirstName"
              id="FirstName"
              placeholder="enter your first name..."
              onChange={(e) => handleChange(e)}
              minLength={3}
              maxLength={10}
            />
          </div>
          <div className="form-item">
            <label htmlFor="LastName">Last Name: </label>
            <input
              type="text"
              value={formData.LastName.value}
              name="LastName"
              id="LastName"
              placeholder="enter your last name..."
              minLength={3}
              maxLength={10}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="DOB">Date of Birth: </label>
            <input
              type="date"
              value={formData.DOB.value}
              name="DOB"
              id="DOB"
              placeholder="enter your dob..."
              onChange={(e) => handleChange(e)}
            />
          </div>
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
            <input
              type="radio"
              name="Gender"
              id="Male"
              onChange={(e) => handleRadio(e)}
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
          <div className="form-item">
            <label htmlFor="Citizenship">Citizenship No: </label>
            <input
              type="number"
              value={formData.Citizenship.value}
              name="Citizenship"
              id="Citizenship"
              placeholder="enter your citizenship no..."
              minLength={14}
              maxLength={14}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              value={formData.Email.value}
              id="Email"
              name="Email"
              placeholder="enter your email.."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              value={formData.Password.value}
              id="Password"
              name="Password"
              placeholder="enter your password.."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="CPassword">Confirm Password</label>
            <input
              type="password"
              value={formData.CPassword.value}
              id="CPassword"
              name="CPassword"
              placeholder="confirm your password.."
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-item">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}