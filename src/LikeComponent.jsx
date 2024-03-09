import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function LikeComponent() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      {isLiked ? (
        <AiFillHeart
          fill="red"
          size={60}
          onClick={() => {
            setIsLiked(false);
          }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            setIsLiked(true);
          }}
          color="red"
          size={60}
        />
      )}
    </div>
  );
}

export default LikeComponent;
