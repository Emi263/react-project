import { useState } from "react";
import ImageOne from "./assets/imgOne.jpeg";
import ImageTwo from "./assets/imageTwo.jpeg";
import ImageThree from "./assets/imageThree.jpeg";

function Carousel() {
  const images = [ImageOne, ImageTwo, ImageThree, ImageTwo, ImageOne];
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={images[activeIndex]} alt="Image" />
      <div style={{ display: "flex", gap: 30, padding: 20 }}>
        <button
          onClick={() => {
            setActiveIndex(activeIndex - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setActiveIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
