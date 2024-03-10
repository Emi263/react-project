import React, { useEffect } from "react";
import axios from "axios";

function ExampleWithAxios() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response);
    });

    // fetch("https://jsonplaceholder.typicode.com/comments", {
    //   method:"POST",
    //   body: JSON.stringify(dataToSend),
    //   headers:{
    //     "accept":"json"
    //   }
    // })
    axios.post("https://jsonplaceholder.typicode.com/comments", {});
  }, []);
  return <div>ExampleWithAxios</div>;
}

export default ExampleWithAxios;
