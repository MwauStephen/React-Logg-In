import React, { useState, Fragment } from "react";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";

import Home from "./Components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedValue = localStorage.getItem("logCredentials");
  if(storedValue === '1'){
    setIsLoggedIn(true)
  }

  // login handler after validation of email and password(through lifting state)
  const loginHandler = (email, password) => {
    localStorage.setItem("logCredentials", "1");
    setIsLoggedIn(true);
  };

  // Log out handler
  const logOutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogOut={logOutHandler} />
      <main>
        {!isLoggedIn && <Login onLoggedIn={loginHandler} />}

        {isLoggedIn && <Home onLogOut={logOutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
