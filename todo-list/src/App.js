import {useRef, useState} from "react";
import "./App.css";
import Todolist from "./Components/Todolist";

function App() {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [idEdit, SetIdEdit] = useState("");
  const HandleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const HandleAddTodo = () => {
    if (!input) return;
    let newarr = {
      txt: input,
      id: Math.floor(Math.random() * 10000),
      isCompleted: false,
    };
    setTodo([newarr, ...todo]);
    setInput("");
  };
  const HandleDeleteTodo = (id) => {
    const copyarr = [...todo];
    const filter = copyarr.filter((item) => item.id !== id);
    setTodo(filter);
  };
  const HandleCompleteTask = (id) => {
    const completed = todo.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTodo(completed);
    console.log(completed);
  };
  const chooseEdit = (id) => {
    inputRef.current.focus();
    SetIdEdit(id);
  };
  const HandleUpdateTodo = (id) => {
    const copyarr = [...todo];
    const update = copyarr.map((item) => {
      if (item.id === id) {
        item.txt = input;
      }
      return item;
    });
    setTodo(update);
  };
  return (
    <div className="App">
      <Todolist
        inputRef={inputRef}
        HandleChangeInput={HandleChangeInput}
        HandleAddTodo={HandleAddTodo}
        input={input}
        todo={todo}
        idEdit={idEdit}
        HandleUpdateTodo={HandleUpdateTodo}
        chooseEdit={chooseEdit}
        HandleDeleteTodo={HandleDeleteTodo}
        HandleCompleteTask={HandleCompleteTask}
      />
    </div>
  );
}

export default App;
