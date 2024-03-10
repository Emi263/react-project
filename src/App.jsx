//import bootstrap files installed via npm
import "bootstrap/dist/css/bootstrap.min.css";

import ListGroup from "./ListGroup";
import { useState } from "react";
import Button from "./common/components/button/Button";
import Carousel from "./Carousel";
import LikeComponent from "./LikeComponent";
import StateUpdates from "./StateUpdates";
import Ecommerce from "./Ecommerce";
import NewForm from "./NewForm";
import UserList from "./UserList";
import Comments from "./Comments";
import ExampleWithAxios from "./ExampleWithAxios";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommentSinglePage from "./CommentSinglePage";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import useFetch from "./useFetch";
import UserInfo from "./UserInfo";
import Form from "./Form";
import NewProductList from "./NewProductList";
import { ThemeContext } from "./ThemeContext";

function App() {
  const testList = ["An item", "A second Item", "A third item", "A fourth Item", "A fifth item"];
  const cities = ["Tirana", "Shkodra", "Durres", "Berat"];
  const [childActiveIndex, setChildActiveIndex] = useState(-1);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NewProductList />,
    },
    {
      path: "comments",
      element: <Comments />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "comment/:id",
      element: <CommentSinglePage />,
    },
    {
      path: "user-info/:id",
      element: <UserInfo />,
    },
    {
      path: "form",
      element: <Form />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ChakraProvider>
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
          {/* <NewForm /> */}
          {/* <Comments /> */}

          {/* <ExampleWithAxios /> */}
          {/* <UserList /> */}

          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
