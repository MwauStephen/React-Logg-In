import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";

const Login = () => {
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPassworIsValid] = useState();

  const validateEmailHandler = () => {};
  const validatePasswordHandler = () => {};

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles.controls} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" onBlur={validateEmailHandler} />
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
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
