import React from "react";

function Button(props) {
  return (
    <button style={{ backgroundColor: props.color ? props.color : "black" }} onClick={props.onButtonClick}>
      {props.children}
    </button>
  );
}

export default Button;
