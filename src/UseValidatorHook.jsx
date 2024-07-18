import React, {useState} from "react";

const useValidator=(formData)=>{
    const [error, setError] = useState('')
    const  validate=()=>{
        if(!formData.FirstName.value){
            formData.FirstName.error="First Name is required";
        }
        Object.keys(formData).map(key=>{
            if(formData[key].error){
              setError(prev=> !prev?formData[key].error:prev)
            }
          })
    }
    return {error, validate};
}

export default useValidator;