import React from "react";
import { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    userName: "",
    tel: "",
    date: "",
    email: "",
    confirmEmail: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      palaceholder: "User name",
      label: "user name",
    },
    {
      id: 2,
      name: "phonenum",
      type: "number",
      palaceholder: "Phone Num",
      label: "Phone Num",
    },
    {
      id: 3,
      name: "date",
      type: "datetime-local",
      palaceholder: "Date",
      label: "Date",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      palaceholder: "Email",
      label: "Email",
    },
    {
      id: 5,
      name: "confirmemail",
      type: "email",
      palaceholder: "Confirm Email",
      label: "confirm email",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //update values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
