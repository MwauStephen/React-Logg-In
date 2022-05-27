import React, { useState, useReducer } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";

const emailReducer = (state, action) => {
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPassworIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking form validity");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   // add a cleanup function(debouncing)
  //   return () => {
  //     console.log("Clean up running");
  //     clearTimeout(identifier);
  //   };
  //   // check if  entire form is valid
  // }, [enteredEmail, enteredPassword]);

  // useReducer for email
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  //   handling email and password inputs
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid.includes("@")
    );
  };

  //   validate email and password
  const validateEmailHandler = (event) => {
    setEmailIsValid(emailState.isValid);
  };
  const validatePasswordHandler = (event) => {
    setPassworIsValid(enteredPassword.trim().length > 6);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(emailState.value, enteredPassword);
    // clear form inputs on submission
    // setEnteredEmail("");
    // setEnteredPassword("");

    // lifiting state up
    props.onLoggedIn(emailState.value, enteredPassword);
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onBlur={validateEmailHandler}
            onChange={emailChangeHandler}
            value={emailState.value}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            value={enteredPassword}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
