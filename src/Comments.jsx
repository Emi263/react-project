import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Button, ButtonGroup } from "@chakra-ui/react";
function Comments() {
  const response = useFetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");

  return (
    <div>
      {response?.data?.[0]}
      <div>
        <Button colorScheme="blue" onClick={response.refetch}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default Comments;
