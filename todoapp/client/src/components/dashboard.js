import React, { useEffect, useRef, useState } from "react";
import { fetchFeatures } from "../modal/dashboard";
import { Link } from "react-router-dom";
import styles from "./all.scss";

function Dashboard(props) {
  const [features, setFeatures] = useState([]);
  const usr = props.user ? props.user.id : 0;

  const eachFeature = (itm) => {
    return (
      <Link  key={itm.id} to={"/"+itm.id}>
        <div className={styles["dashelement"]}>
        <img src={"/src/"+itm.icon}  />
        <h4>{itm.title}</h4>
      </div></Link>
    );
  };

  function loadFeatures() {
    return (
      <div className={styles["dashGroup"]}>
        {features.map(eachFeature)}
      </div>
    );
  }

  useEffect(() => {
    fetchFeatures().then((val) => {
      console.log(val);
      setFeatures(val);
    });
  }, []);

  return (
    <div className={styles["page"]}>
      <div className={styles["todosection"]}>
        <h2>Dashboard</h2>
        {loadFeatures()}
      </div>
    </div>
  );
}

export default Dashboard;
