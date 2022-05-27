import React from "react";
import AuthContext from "../../Context/auth-context";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}

              {props.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {props.isLoggedIn && (
                <li>
                  <button onClick={props.onLogOut}>Log Out</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
