import React from "react";
import Todo from "./Todo";

const TodoList = ({todolist, completeTask, deleteTask}) => {
  return (
    <>
      {todolist.map((todo) => (
        <Todo todo={todo} completeTask={completeTask} deleteTask={deleteTask} />
      ))}
    </>
  );
};

export default TodoList;
