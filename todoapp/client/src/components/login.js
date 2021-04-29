import React, { useEffect, useRef, useState } from "react";
import {
  fetchTodos,
  loggedUser,
  userLogin,
  userRegister,
} from "../modal/todos";
import styles from "./all.scss";

function Login(props) {
  // const [todos, setTodos] = useState([]);
  const uNameRef = useRef(null);
  const uPassRef = useRef(null);
  const uNameRRef = useRef(null);
  const uPassRRef = useRef(null);
  const [errorMsg, setErrorMessage] = useState("");
  const [saveMsg, setSaveMessage] = useState("");

  function doLogin() {
    const uname = uNameRef.current.value;
    const upass = uPassRef.current.value;

    console.log(uname);
    // console.log(uNameRef)
    userLogin(uname, upass).then((resp) => {
      console.log(resp);
      const foundUser = resp.data;
      if (foundUser.length) {
        loggedUser(JSON.stringify(foundUser[0]));
        props.setUser(foundUser[0]);
        setErrorMessage("");
      } else {
        setErrorMessage("User doesnot exist!");
      }
    });
    // console.log(inputTodoRef.current.value,"ival")
  }
  function doRegister() {
    const uname = uNameRRef.current.value;
    const upass = uPassRRef.current.value;

    console.log(uname);
    // console.log(uNameRef)
    if (uname.length && upass.length)
      userRegister(uname, upass).then((resp) => {
        console.log(resp);
        const foundUser = resp.data;
        console.log(foundUser);
        if (foundUser) {
          uNameRRef.current.value = "";
          uPassRRef.current.value = "";
          setSaveMessage("Successfully registered");
        } else {
          setSaveMessage("Not able to register");
        }
      });
  }

  useEffect(() => {
    const u = loggedUser();
    if (u) {
      console.log(JSON.stringify(u));
      props.setUser(JSON.parse(u));
    }
  }, []);

  return (
    <div className={styles["page"]}>
      <div className={styles["todosection"]}>
        <h2>Login</h2>
        <div className={styles["todologin"]}>
          <input type="text" placeholder="Enter Username" ref={uNameRef} />
          <input type="password" placeholder="Enter Password" ref={uPassRef} />
          <b>{errorMsg}</b>
          <button onClick={doLogin}>Login</button>
        </div>
        <br />
        <br />
        <h2>Register</h2>
        <div className={styles["todologin"]}>
          <input type="text" placeholder="Enter Username" ref={uNameRRef} />
          <input type="password" placeholder="Enter Password" ref={uPassRRef} />
          <b>{saveMsg}</b>
          <button onClick={doRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
