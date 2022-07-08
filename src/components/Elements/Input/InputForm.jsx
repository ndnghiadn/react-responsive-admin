import React from "react";

function InputForm({label, type,id,placeHolder}) {
  return (
    <>
      <label htmlFor="emailaddress" className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        id={id}
        required
        placeholder={placeHolder}
      />
    </>
  );
}

export default InputForm;
