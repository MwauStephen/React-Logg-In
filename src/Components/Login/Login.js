import React from "react";
import Button from "../UI/Button/Button";

const Login = () => {
  return (
    <form>
      <div>
        <label>E-mail:</label>
        <input type="email" />
      </div>
      <div>
        <label>Password:</label>
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
};

export default Login;
