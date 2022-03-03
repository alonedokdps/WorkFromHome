import React from "react";
import "./Todo.css";
const Todo = ({
  txt,
  id,
  HandleDeleteTodo,
  HandleCompleteTask,
  chooseEdit,
  completed,
}) => {
  return (
    <div className={completed ? ` txt active` : `txt`} key={id}>
      <p onClick={() => HandleCompleteTask(id)}>{txt}</p>
      <div className="tool">
        <ion-icon
          name="create-outline"
          onClick={() => chooseEdit(id)}
        ></ion-icon>
        <ion-icon
          name="close-circle-outline"
          onClick={() => HandleDeleteTodo(id)}
        ></ion-icon>
      </div>
    </div>
  );
};

export default Todo;
