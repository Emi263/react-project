import { useState } from "react";

function ListGroup(props) {
  //const listItems = props.listItems
  //const heading = props.heading;
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      {/**Children props, the content between opening tag and closing tag when we call the Component */}
      {props.children}
      {/**If the heading exists, display the heading, else display "List" */}
      <h1>{props.heading ? props.heading : "List"}</h1>
      <p>{props.listItems.length === 0 && "Empty"}</p>
      <ul className="list-group">
        {props.listItems.map((item, index) => {
          return (
            <li
              onClick={() => {
                setActiveIndex(index);
                //call the function from props with 2 parameters
                props.onSelectItem(item, index);
              }}
              key={item}
              //check whether the current index of the list is the same as the active index
              //if so, the list item  classname will be "list-group-item active", else "list-group-item"
              className={index === activeIndex ? "list-group-item active" : "list-group-item"}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
