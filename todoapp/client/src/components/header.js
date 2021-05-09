import React, { useEffect } from "react";
import { logOutUser } from "../modal/dashboard";
import { Link } from "react-router-dom";
import styles from "./all.scss";

function Header(props) {
  console.log(props, "pp");

  const setLogout = () => {
    logOutUser();
    props.setUser(false);
  };

  return (
    <div className={styles["headerclass"]}>
      <div className={styles["headersection"]}>
        <h2><Link to="/">Minify App</Link></h2>
      </div>
      <div className={styles["headersection"]}>
        {props.user && props.user.username ? (
          <div>
            <Link to="/todos">Todos</Link>
            <Link to="/notes">Notes</Link>
            <a onClick={setLogout}>{props.user.username} (Logout)</a>
          </div>
        ) : (
          "login"
        )}
      </div>
    </div>
  );
}

export default Header;
