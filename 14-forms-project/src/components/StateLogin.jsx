import { useState } from "react";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `User email: ${enteredValues.email} \nPassword: ${enteredValues.password}`
    );
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [event.target.id]: event.target.value,
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [event.target.id]: false
    }))
  }

  function handleInputBlur(event) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [event.target.id]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email. </p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
