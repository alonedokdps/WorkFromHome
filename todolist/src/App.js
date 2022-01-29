import {ToastContainer, toast} from "react-toastify";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="Todo-app">
      <TodoList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
