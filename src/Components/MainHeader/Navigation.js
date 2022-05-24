import React from "react";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul >
        <li>Users</li>
        <li>Admin</li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
