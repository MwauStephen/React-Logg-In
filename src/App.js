import React, { Fragment } from "react";
import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Login />
      </main>
    </Fragment>
  );
}

export default App;
