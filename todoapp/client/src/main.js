import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Login from "./components/login";
import Todos from "./components/todos";

import styles from "./main.scss";

function Main() {
  const [startMessage, setStartMessage] = useState("");
  const [user, setUser] = useState(false);

  const fetchInitialResponse = async () => {
    // const response = await fetch('/api/getdata');
    // const responsejson = await response.json();
    setStartMessage("reactJs project");
    // setUser({
    // 	name : 'sonukedia'
    // })
  };

  useEffect(() => {
    fetchInitialResponse();
  }, []);

  return (
    <div>
      <Header user={user} setUser={setUser}/>
      {user ? <Todos user={user} /> : <Login user={user} setUser={setUser} />}
      <div className={styles["container"]}>{startMessage}</div>
    </div>
  );
}

export default Main;
