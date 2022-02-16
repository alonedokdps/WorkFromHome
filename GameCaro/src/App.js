import {useState} from "react";
import "./App.css";
import Count from "./components/count/Count";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/Toggle";
import YoutubeItem from "./YoutubeItem";

function App() {
  const [on, setOn] = useState(false);
  // let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // const obj = [
  //   {
  //     id: 1,
  //     title: "hello every body",
  //     avatar:
  //       "https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     image:
  //       "https://images.unsplash.com/photo-1644669417119-2e030edab474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //     author: "domixi",
  //   },
  //   {
  //     id: 2,
  //     title: "hello every body",
  //     avatar:
  //       "https://images.unsplash.com/photo-1638913660695-b490171d17c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  //     image:
  //       "https://images.unsplash.com/photo-1644681950291-047f2e7410d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80",
  //     author: "Hadalolo",
  //   },
  //   {
  //     id: 3,
  //     title: "loser story",
  //     avatar:
  //       "https://images.unsplash.com/photo-1644681927772-1d3b450c1ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  //     image:
  //       "https://images.unsplash.com/photo-1640622333305-9c0d3c9b18a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     author: "noraoto",
  //   },
  //   {
  //     id: 4,
  //     title: "fucking bitch",
  //     avatar:
  //       "https://images.unsplash.com/photo-1644593027723-9ccf0f7ac826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     image:
  //       "https://images.unsplash.com/photo-1644669236339-2aa66ff27920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  //     author: "Alectro",
  //   },
  // ];
  return (
    <>
      {/* <Toggle />
      <Count /> */}
      <Game />
    </>
  );
}

export default App;
