import { useState } from "react";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

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
