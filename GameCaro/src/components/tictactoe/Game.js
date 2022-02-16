import React, {useEffect, useState} from "react";
import {calculateWinner} from "../../Helper";
import Board from "./Board";
import "./Game.css";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    console.log("check box", boardCopy);
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  console.log(xIsNext);
  return (
    <>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && winner ? `winner is ${xIsNext ? "O" : "X"}` : ""}
      <button onClick={() => setBoard(Array(9).fill(null))}>reset game</button>
    </>
  );
}

export default Game;
