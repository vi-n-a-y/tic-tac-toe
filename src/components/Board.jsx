import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const initialState = Array(9).fill(null);
  const [state, setState] = useState(initialState);
  // console.log("State :", state);
  const [isXTurn, setIsXTurn] = useState(true);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        console.log(state[a]);
         console.log(state[b]);
        console.log(state[c]);
        return state[a];
      }
    }
    return null;
  };

  const checkDraw = () => {
    return state.every((square) => square !== null) && !checkWinner();
  };

  const isWinner = checkWinner();
  const isDraw = checkDraw();
  console.log(isWinner);
  const handleClick = (index) => {
    // console.log(index);
    if (state[index] !== null || isWinner || isDraw) {
      return;
    }

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setState(initialState);
    setIsXTurn(true);
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={resetGame}>Play Again</button>
        </>
      ) : isDraw ? (
        <>
          <h4>It's a draw!</h4>
          <button onClick={resetGame}>Play Again</button>
        </>
      ) : (
        <>
          <h4>{isXTurn ? "X" : "0"} Please Move</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
