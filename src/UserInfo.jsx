import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { ThemeContext } from "./ThemeContext";

function UserInfo() {
  const params = useParams();

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  const res = useFetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

  //res.data.name = undefined;
  //res.data.name = "sdfdsf"
  useEffect(() => {
    document.title = res.data?.name;
  }, [res.data?.name]);

  return (
    <div>
      <p>Name: {res.data?.name}</p>
      <p>Address: {res.data?.address.street}</p>
      <p>Email: {res.data?.email}</p>

      <button onClick={() => themeContext.setTheme("dark")}>Change theme</button>
    </div>
  );
}

export default UserInfo;
