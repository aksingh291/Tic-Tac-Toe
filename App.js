import './App.css';
import React, { useState } from 'react'

import { Board } from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';
import { Restart } from './components/Restart';
import { Heading } from './components/Heading';

function App() {

  const winIf = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  //set the initial value as 0 for both
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      }
      else {
        return value;
      }
    })

    const winner = checkWinner(updateBoard);
    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      }
      else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
      // console.log(winner)
      console.log(scores)
    }

    checkWinner(updateBoard);
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < winIf.length; i++) {
      const [x, y, z] = winIf[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  }
  //to reset the game after any result....
  const reset = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  // to restart the game...
  const restart = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setScores({ xScore: 0, oScore: 0 });
  }
  return (
    <div className="App">
      <Heading/>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? reset : handleBoxClick} />
      <Restart reset={restart} />
      
    </div>
  );
}

export default App;
