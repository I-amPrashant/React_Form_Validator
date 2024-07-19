import React, {useState} from "react";

const useValidator = (formData, setFormData) => {
    const  [errorName, setErrorName] = useState('');
   const validator=() => {
    let newFormData = { ...formData };
    if (!formData['FirstName'].value) {
      newFormData['FirstName'] = { value: formData['FirstName'].value, error: 'First Name is required' };
      setErrorName(prevName=>prevName?prevName:'FirstName')
    } else {
      newFormData['FirstName'] = { value: formData['FirstName'].value, error: '' };
      setErrorName('')
    }

    if (!formData['LastName'].value) {
      newFormData['LastName'] = { value: formData['LastName'].value, error: 'Last Name is required' };
      setErrorName(prevName=>prevName?prevName:'LastName')
    } else {
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
    return {validator, errorName};
}
export default useValidator;