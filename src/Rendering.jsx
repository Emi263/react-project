import React, { useEffect, useState } from "react";

function Rendering() {
  //mount -> Happens only the first time
  //render -> On every state or props change

  //executed on every re-render

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("rendered");
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, []);

  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Increment </button>
      {loading && <p>Loading</p>}
      {data.map((dt) => {
        return <li key={dt.id}>{dt.name}</li>;
      })}
    </div>
  );
}

export default Rendering;
