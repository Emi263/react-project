import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const nav = useNavigate();

  setTimeout(() => {
    nav("/");
  }, 2000);

  return (
    <div>
      <p>We are redirecting you to home page</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default NotFoundPage;
