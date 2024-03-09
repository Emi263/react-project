import React from "react";

function Event(props) {
  function handleClick() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Event;
