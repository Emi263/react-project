//import bootstrap files installed via npm
import "bootstrap/dist/css/bootstrap.min.css";

import ListGroup from "./ListGroup";
import { useState } from "react";
import Button from "./common/components/button/Button";
import Carousel from "./Carousel";
import LikeComponent from "./LikeComponent";
import StateUpdates from "./StateUpdates";
import Ecommerce from "./Ecommerce";

function App() {
  const testList = ["An item", "A second Item", "A third item", "A fourth Item", "A fifth item"];
  const cities = ["Tirana", "Shkodra", "Durres", "Berat"];
  const [childActiveIndex, setChildActiveIndex] = useState(-1);

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  return (
    <>
      {/* <ListGroup
        listItems={testList}
        heading="List items"
        //pass values from Child to Parent via Props
        onSelectItem={(item, index) => {
          setChildActiveIndex(index);
          console.log("Function called", item, index);
        }}
      />
      <br />
      <ListGroup listItems={cities}></ListGroup>
      <br />
      <br />
      <ListGroup listItems={[]}></ListGroup>
      <Button
        onButtonClick={() => {
          setIsAlertVisible(true);
        }}
        color="red"
      >
        Submit
      </Button>
      */}
      {/* {isAlertVisible && (
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
          <p onClick={() => setIsAlertVisible(false)}>X</p>
        </div>
      )}
      <Carousel />
      <LikeComponent label="sdfsdffd" /> */}
      <Ecommerce />
    </>
  );
}

export default App;
