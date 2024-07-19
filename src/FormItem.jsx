import React, { useEffect, useRef } from 'react'

export default function FormItem({type, value, name, labelText, placeholder, minLength, maxLength, formData, setFormData, errorName}) {
    const inputRef=useRef(null)
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: {value: e.target.value, error:''},
        });
      };
      errorName && errorName===name && inputRef.current.focus();
  return (
    <div className="form-item">
    <label htmlFor={name}>{labelText} </label>
    <input
      type={type}
      ref={inputRef}
      value={value}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={(e)=>handleChange(e)}
      minLength={minLength}
      maxLength={maxLength}
    />
  </div>
  )
}
