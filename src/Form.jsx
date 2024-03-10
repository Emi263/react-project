import React, { useEffect, useState, useRef } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const nameInputRef = useRef();

  useEffect(() => {
    document.title = "This is a new title ";
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.target;
        }}
        style={{
          minHeight: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          ref={nameInputRef}
          style={{ border: "1px solid red" }}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <button
        onClick={() => {
          nameInputRef.current.focus();
        }}
      >
        Focus
      </button>
    </>
  );
}

export default Form;
