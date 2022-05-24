import React, { useState, Fragment } from "react";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Navigation from "./Components/MainHeader/Navigation";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Login />
        <Navigation />
        <Home />
      </main>
    </Fragment>
  );
}

export default App;
