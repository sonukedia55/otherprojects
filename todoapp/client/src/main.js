import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Login from "./components/login";
import Notes from "./components/notes";
import Todos from "./components/todos";

import styles from "./main.scss";

function Main(props) {
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

  console.log("pr", props);

  useEffect(() => {
    fetchInitialResponse();
  }, []);

  return (
    <div>
      
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route
            path="/todos"
            component={(props) =>
              user ? (
                <Todos user={user} {...props} />
              ) : (
                <Login user={user} setUser={setUser} />
              )
            }
          />
          <Route
            path="/notes"
            component={(props) =>
              user ? (
                <Notes user={user} {...props} />
              ) : (
                <Login user={user} setUser={setUser} />
              )
            }
          />
          <Route
            path=""
            exact
            component={(props) =>
              user ? (
                <Dashboard user={user} {...props} />
              ) : (
                <Login user={user} setUser={setUser} />
              )
            }
          />
        </Switch>
      </Router>
      {/* {user ? <Dashboard user={user} /> : <Login user={user} setUser={setUser} />} */}
      <div className={styles["container"]}>{startMessage}</div>
    </div>
  );
}

export default Main;
