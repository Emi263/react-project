import React, { useState } from "react";

function NewForm() {
  const dataToSend = {
    email: "email@gsdf.com",
    password: "34345",
    age: 23,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [selectedGender, setSelectedGender] = useState("female");
  const [selectedOptionValue, setSelectedOptionValue] = useState();

  const initialData = {
    email: "",
    password: "",
    age: undefined,
    isCheckedOut: false,
    selectedGender: "female",
    selectedOptionValue: undefined,
  };
  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  console.log(formData);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const dataToSend = {
          email,
          password,
          age,
          isCheckedOut,
          gender: selectedGender,
          selectedOption: selectedOptionValue,
        };
        setAge(undefined);
        setEmail("");
        setPassword("");

        //after we are done
        setFormData(initialData);
        console.log(dataToSend);
      }}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={formData.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={formData.password}
        />
      </div>

      <label htmlFor="text" className="form-label">
        Age
      </label>
      <input
        onChange={(event) => {
          const value = event.target.value;
          setAge(parseInt(value));
          setFormData({ ...formData, age: value });
        }}
        type="number"
        className="form-control"
        id="text"
        aria-describedby="emailHelp"
        value={age}
      />

      <div className="mb-3 form-check">
        <input
          onChange={(event) => {
            console.log(event.target.checked);

            setIsCheckedOut(event.target.checked);
          }}
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <>
        <div className="form-check">
          <input
            className="form-check-input"
            value="female"
            checked={selectedGender === "female"}
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedGender(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            value="male"
            checked={selectedGender === "male"}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedGender(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            value="other"
            checked={selectedGender === "other"}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedGender(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            other
          </label>
        </div>

        <select
          onChange={(e) => {
            console.log(e.target.value);
            setSelectedOptionValue(e.target.value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewForm;
