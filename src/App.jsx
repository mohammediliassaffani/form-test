import React from "react";
import { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    userName: "",
    phonenum: "",
    date: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      palaceholder: "User name",
      errorMessage:
        "Username should be 4-10 characters and no special characters ",
      label: "user name",
      pattern: "^[A-Za-z0-9]{4,10}$",
      required: true,
    },
    {
      id: 2,
      name: "phonenum",
      type: "tel",
      palaceholder: "Phone Num",
      errorMessage: "phone number invalide",
      label: "Phone Num",
      pattern: "^[0-9]{8,10}$",
      required: true,
    },
    {
      id: 3,
      name: "date",
      type: "datetime-local",
      palaceholder: "Date",
      label: "Date",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      palaceholder: "Email",
      errorMessage: "eamail invalide",
      label: "Email ",
      required: true,
    },
    {
      id: 5,
      name: "confirmemail",
      type: "email",
      palaceholder: "Confirm Email",
      errorMessage: "email not match",
      label: "confirm email",
      pattern: values.email,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //update values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClick = () => console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <h1>make an appointment</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={onClick}>Submit</button>
      </form>
    </div>
  );
};

export default App;
