import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <Card className={styles.login}>
      <form>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
