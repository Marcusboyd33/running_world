import React from "react";

const InputField = props => {
  return(
    <div>
      <input
        handleChange={props.handleChange}
        name=
        type={props.type}
        pattern={props.pattern}
        value={props.value}
      />
    </div>
  )
}

export default InputField;
