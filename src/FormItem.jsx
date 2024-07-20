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

        const normalTheme={
          outline: 'none',
          border: 'none',
          padding:' 5px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition:'all .2s ease-in',
        }
        const errorTheme={
          border: '2px solid red',
        }
        const appliedTheme=errorName===name?errorTheme:normalTheme
  return (
    <div className="form-item">
    <label htmlFor={name}>{labelText} </label>
    <input
      type={type}
      ref={inputRef}
      style={appliedTheme}
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
