import React from "react";
import "./Todo.css";
const Todo = ({todo, completeTask, deleteTask}) => {
  return (
    <div
      className={todo.isComplete === true ? "text active" : "text"}
      key={todo.id}
      onClick={() => completeTask(todo.id)}
    >
      {todo.name}
      <span>
        <ion-icon
          onClick={() => deleteTask(todo.id)}
          name="close-circle-outline"
        ></ion-icon>
      </span>
    </div>
  );
};

export default Todo;
