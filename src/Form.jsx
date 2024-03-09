import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.target;
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
