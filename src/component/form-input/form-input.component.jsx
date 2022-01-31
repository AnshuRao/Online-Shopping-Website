import React from "react";

import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherInputProps} />

      {
          
        Boolean(label) ? (
        <label
          className={`${ Boolean(otherInputProps.value.length) ? 'shrink' : ' '}
            
           form-input-label`}
        >
       {console.log(otherInputProps.value.length)}
          {label}


        </label>
      ) : null
      
      }
    </div>
  );
};
export default FormInput;
