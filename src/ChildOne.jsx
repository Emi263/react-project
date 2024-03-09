import React from "react";

function ChildOne(props) {
  return (
    <div>
      <div onClick={() => props.setState("Yooo")}>I am a div</div>
    </div>
  );
}

export default ChildOne;
