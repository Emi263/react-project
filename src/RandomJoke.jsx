import React from "react";
import useFetch from "./useFetch";

function RandomJoke() {
  const response = useFetch("https://official-joke-api.appspot.com/random_joke");
  return (
    <div>
      <h3>Type: {response.data?.type}</h3>
      <h3>Setup: {response.data?.setup}</h3>
      <h3>Punch: {response.data?.punchline}</h3>s
    </div>
  );
}

export default RandomJoke;
