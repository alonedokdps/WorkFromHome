import React, {useState} from "react";
import Todo from "./Todo";
import "./Todolist.css";
const TodoList = () => {
  const [value, setValue] = useState("dad");
  return (
    <div className="form">
      <div className="text-input">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="input here...."
        />
        <button onClick={() => alert("ok")}>ADD</button>
      </div>
      <div className="todo">
        <Todo />
      </div>
    </div>
  );
};

export default TodoList;
