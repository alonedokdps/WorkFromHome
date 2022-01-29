import React from "react";
import {useState} from "react";
import {toast} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    toast.success("Wow so easy!");
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    // console.log("check arr remove", removeArr);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  console.log("test complete", todos);
  return (
    <>
      <div className="todo-app">
        <h1>What's the plan for today ?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default TodoList;
