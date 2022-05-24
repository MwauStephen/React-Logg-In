import React, { useState, Fragment } from "react";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Navigation from "./Components/MainHeader/Navigation";
import Home from "./Components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} />
      <main>
        <Login onLoggedIn={loginHandler} />

        <Home />
      </main>
    </Fragment>
  );
}

export default App;
