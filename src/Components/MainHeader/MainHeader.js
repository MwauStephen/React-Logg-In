import React from "react";
import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>A login Page</h1>
      <Navigation onLogOut={props.onLogOut} />
    </header>
  );
};

export default MainHeader;
