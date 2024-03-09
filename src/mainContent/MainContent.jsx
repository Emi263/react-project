import { useState } from "react";

function MainContent() {
  const [name, setName] = useState("default value");

  function changeName() {
    setName("New Value");
  }
  return <div>{name}</div>;
}

export default MainContent;
