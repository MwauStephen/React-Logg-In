import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";

const Login = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.actions}>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
