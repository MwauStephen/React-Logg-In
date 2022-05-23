import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const Login = () => {
  return (
    <Card>
      <form>
        <div>
          <label>E-mail:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
