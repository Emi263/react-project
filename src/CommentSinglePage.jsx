import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function CommentSinglePage() {
  const params = useParams();
  console.log(params);
  const nav = useNavigate();

  return (
    <div>
      This is comment with id: {params.id}
      <Button onClick={() => nav("/")}>Go to homepage</Button>
    </div>
  );
}

export default CommentSinglePage;
