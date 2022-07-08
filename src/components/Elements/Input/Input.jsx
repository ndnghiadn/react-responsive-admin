import React from 'react'

function Input({type,placeHolder,icon}) {
  return (
   <div className="input-group">
  <input type={type ? type : "text"} className="form-control" placeholder={placeHolder} id="top-search" />
  <button className="btn input-group-text" type="submit">
    <i className="fe-search" /> 
  </button>
</div>

  )
}

export default Input