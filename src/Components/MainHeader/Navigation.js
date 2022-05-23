import React from "react";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
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
