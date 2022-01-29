import React, {useEffect} from "react";
import {useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import TodoForm from "./TodoForm";
const Todo = (props) => {
  useEffect(() => {}, [props.todos]);
  console.log("check", props.todos);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todos.map((todo, index) => {
    return (
      <div
        className={todo.isCompleted ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => props.removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({id: todo.id, text: todo.text})}
            className="edit-icon"
          />
        </div>
      </div>
    );
  });
};
export default Todo;
