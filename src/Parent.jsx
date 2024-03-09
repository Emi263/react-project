import React, { useState } from "react";
import ChildOne from "./ChildOne";

function Parent() {
  const [state, setState] = useState("dfdffd");
  return (
    <div>
      <button className="btn btn-primary">Hello</button>
      <ChildOne
        handleDivClick={() => {
          setState("");
        }}
        setState={setState}
        state={state}
      />
      {state}
    </div>
  );
}

export default Parent;
