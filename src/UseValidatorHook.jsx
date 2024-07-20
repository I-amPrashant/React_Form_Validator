import React, {useState} from "react";

const useValidator = (formData, setFormData) => {
    const  [errorName, setErrorName] = useState('');
    const [errorValue, setErrorValue] = useState('');
   const validator=() => {
    let newFormData = { ...formData };
    let validUsername=/^[A-Z][a-z]{3,}$/;

    //first name
  if(!validUsername.test(formData['FirstName'].value)){
      newFormData['FirstName'] = { value: formData['FirstName'].value, error: 'first name should have at least 4 character and start with Uppercase' };
      setErrorValue('first name should have at least 4 character and start with Uppercase')
      setErrorName(prevName=>prevName?prevName:'FirstName')
    } 
    else {
      newFormData['FirstName'] = { value: formData['FirstName'].value, error: '' };
      setErrorValue('')
      setErrorName('')
    }

    //last name
   if(!validUsername.test(formData['LastName'].value)){
      newFormData['LastName'] = { value: formData['LastName'].value, error: 'last name should have at least 4 character and start with Uppercase'};
      setErrorValue(prevError=>prevError?prevError:'last name should have at least 4 character and start with Uppercase')
      setErrorName(prevName=>prevName?prevName:'LastName')
    }
    else {
      newFormData['LastName'] = { value: formData['LastName'].value, error: '' };
    }

    if(!formData['DOB'].value){
      newFormData['DOB'] = {value: formData['DOB'].value, error: 'Date of Birth is required'};
      setErrorName(prevName=>prevName?prevName:'DOB')
    }else{
      newFormData['DOB'] = {value: formData['DOB'].value, error: ''};
    }
    
    if(!formData['Citizenship'].value){
      newFormData['Citizenship'] = {value: formData['Citizenship'].value, error: 'Citizenship no is required, type numbers only'};
      setErrorName(prevName=>prevName?prevName:'Citizenship')
    }else{
      newFormData['Citizenship'] = {value: formData['Citizenship'].value, error: ''};
    }

    setFormData(newFormData);
   }
    return {validator, errorName, errorValue};
}
export default useValidator;