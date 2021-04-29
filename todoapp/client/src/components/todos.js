import React, { useEffect, useRef, useState } from "react";
import { fetchTodos, saveTodos, updateTodo } from "../modal/todos";
import styles from "./all.scss";

function Todos(props) {
  const [todos, setTodos] = useState([]);
  const inputTodoRef = useRef(null);
  const usr = props.user ? props.user.id : 0;

  const eachTodo = (itm) => {
    return (
      <div key={itm.id} className={styles["todoelement"]}>
        <input
          data-id={itm.id}
          onChange={updateTodos.bind(this)}
          type="checkbox"
          {...(itm.status ? { defaultChecked: true } : {})}
        />
        {itm.todo}
      </div>
    );
  };

  function updateTodos(e) {
    updateTodo(e.target.getAttribute("data-id"), e.target.checked).then(
      (up) => {
        console.log(up);
      }
    );
  }

  function addTodo() {
    saveTodos({
      todo: inputTodoRef.current.value,
      user: props.user.id,
    }).then((resp) => {
      console.log(resp);
      inputTodoRef.current.value = "";
      fetchTodos(usr).then((val) => {
        console.log(val);
        setTodos(val);
      });
    });

    console.log(inputTodoRef.current.value, "ival");
  }

  function loadTodoList() {
    return (
      <div className={styles["todoGroup"]}>
        {todos.map(eachTodo)}
        <div className={styles["todoelement"]}>
          <input type="text" placeholder="Enter todo" ref={inputTodoRef} />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchTodos(usr).then((val) => {
      console.log(val);
      setTodos(val);
    });
  }, []);

  return (
    <div className={styles["page"]}>
      <div className={styles["todosection"]}>
        <h2>Todo App</h2>
        {loadTodoList()}
      </div>
    </div>
  );
}

export default Todos;
