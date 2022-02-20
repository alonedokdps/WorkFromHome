import {useCallback, useEffect, useState} from "react";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [textInput, setTextInput] = useState("");
  const LOCAL_STORAGE_KEY = "LOCAL_KEY";
  useEffect(() => {
    let storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storage) {
      setTodolist(JSON.parse(storage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todolist));
  }, [todolist]);
  const onChangeInput = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const handleAddTodoList = useCallback(() => {
    if (!textInput) return;
    setTodolist([
      ...todolist,
      {
        id: Math.floor(Math.random() * 10000),
        name: textInput,
        isComplete: false,
      },
    ]);
    setTextInput("");
  }, [textInput, todolist]);
  const completeTask = useCallback((id) => {
    setTodolist((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? {...todo, isComplete: true} : todo
      )
    );
  });
  const deleteTask = useCallback((id) => {
    setTodolist((prevState) => prevState.filter((todo) => todo.id !== id));
  }, []);
  return (
    <div className="app">
      <div className="form">
        <h3 className="title">Những Việc Cần Làm</h3>
        <div className="input-todo">
          <input
            type="text"
            placeholder="Nhập việc cần làm ...."
            name="todo"
            value={textInput}
            onChange={onChangeInput}
          />
          <button onClick={handleAddTodoList}>Thêm</button>
        </div>
        <div className="todo-list">
          <TodoList
            todolist={todolist}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
