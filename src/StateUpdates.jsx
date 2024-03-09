import React, { useState } from "react";

function StateUpdates() {
  const [person, setPerson] = useState({
    name: "Ben",
    fullname: "sdfsfd",
    age: 20,
    contact: {
      address: "Test",
      phoneNumber: 343345,
      email: "email@gmail.com",
    },
  });

  const [todos, setTodos] = useState(["grocery", "school", "react", "css"]);

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Ben",
      age: 20,
      contact: {
        address: "Test",
        phoneNumber: 343345,
        email: "email@gmail.com",
      },
    },
    {
      id: 2,
      name: "John",
      age: 78,
      contact: {
        address: "Test",
        phoneNumber: 343345,
        email: "email@gmail.com",
      },
    },
    {
      id: 5,
      name: "Mark",
      age: 13,
      contact: {
        address: "Test",
        phoneNumber: 343345,
        email: "email@gmail.com",
      },
    },
    {
      id: 8,
      name: "Clark",
      age: 12,
      contact: {
        address: "Test",
        phoneNumber: 343345,
        email: "email@gmail.com",
      },
    },
  ]);

  function updatePerson(id) {
    //remove the person with id = 5;

    const filteredList = people.filter((item) => item.id !== 5);

    //change the age of the person whose id === id that we get as an argument
    const newPeople = people.map((item) => {
      if (item.id === id) {
        item.age = 26;
        return item;
      } else {
        return item;
      }
    });

    setPeople(newPeople);
    console.log(newPeople);
  }

  function search(value) {
    //filter the items that contain the value from input
    const filteredList = people.filter((item) => {
      if (item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        return true;
      }
      return false;
    });
    //filter only the adult people
    const adultPerson = people.filter((item) => {
      if (item.age >= 18) {
        return true;
      }
      return false;
    });

    console.log({ adultPerson });
  }

  function changeTodos() {
    //add a new todo in beginning
    const updatedTodos = ["html", ...todos];

    //add a new todo in the end
    const updatedTodosOne = [...todos, "html"];

    //filter the school
    const filteredTodos = todos.filter((item) => item !== "school");

    //create a new list with objects of type {name: ""}
    const changedTodos = todos.map((item) => {
      return {
        name: item,
      };
    });

    console.log(changedTodos);
  }

  function changeState() {
    //change the adddress, add a faxNumber
    const updatedPerson = {
      ...person,
      contact: {
        ...person.contact,
        address: "Road 7",
        faxNumber: 34534345,
      },
    };
    setPerson(updatedPerson);
  }

  return (
    <div>
      <h4>Age: {person.age}</h4>
      <h4>Name: {person.contact.address}</h4>

      <button onClick={() => search("ar")}>Change</button>
    </div>
  );
}

export default StateUpdates;
