import React from "react";
import Todo from "./Todo";
import "./Todolist.css";
const Todolist = ({
  HandleChangeInput,
  inputRef,
  input,
  HandleAddTodo,
  todo,
  chooseEdit,
  idEdit,
  HandleUpdateTodo,
  HandleDeleteTodo,
  HandleCompleteTask,
}) => {
  return (
    <div className="container">
      <h3>TODOLIST</h3>
      <div className="form-input">
        <input
          className={idEdit ? "input active" : "input"}
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Do something...."
          onChange={HandleChangeInput}
        />
        <button
          onClick={idEdit ? () => HandleUpdateTodo(idEdit) : HandleAddTodo}
          className={idEdit ? "btn active" : "btn"}
        >
          {idEdit ? "EDIT" : "ADD"}
        </button>
      </div>
      <div className="todo">
        {todo.length > 0 &&
          todo.map((item) => {
            return (
              <Todo
                txt={item.txt}
                HandleDeleteTodo={HandleDeleteTodo}
                id={item.id}
                HandleCompleteTask={HandleCompleteTask}
                completed={item.isCompleted}
                chooseEdit={chooseEdit}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Todolist;
