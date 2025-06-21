import { useState } from 'react';
import './App.css';

function Game({ onBack }) {
  const [options, setOptions] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [status, setStatus] = useState("X's turn");
  const [running, setRunning] = useState(true);

  const handleClick = (index) => {
    if (!running || options[index] !== "") return;

    const newOptions = [...options];
    newOptions[index] = currentPlayer;
    setOptions(newOptions);

    const winner = checkWinner(newOptions);
    if (winner) {
      setStatus(`${winner} wins!`);
      setRunning(false);
    } else if (!newOptions.includes("")) {
      setStatus("Draw!");
      setRunning(false);
    } else {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(nextPlayer);
      setStatus(`${nextPlayer}'s turn`);
    }
  };

  const checkWinner = (opts) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of winConditions) {
      if (opts[a] && opts[a] === opts[b] && opts[a] === opts[c]) {
        return opts[a];
      }
    }
    return null;
  };

  const restart = () => {
    setOptions(Array(9).fill(""));
    setCurrentPlayer("X");
    setStatus("X's turn");
    setRunning(true);
  };

  return (
    <div id="gameContainer">
      {/* 🔙 Home button */}
      <div className="top-bar">
        <button id="homeButton" onClick={onBack}>← Back to Home</button>
      </div>

      {/* 🔲 Game Board */}
      <div id="cellContainer">
        {options.map((cell, i) => (
          <div key={i} className="cell" onClick={() => handleClick(i)}>
            {cell}
          </div>
        ))}
      </div>

      {/* 🧠 Game Status */}
      <h2 id="player_status">{status}</h2>

      {/* 🔁 Restart Button */}
      <div className="bottom-bar">
        <button id="restartButton" onClick={restart}>Restart</button>
      </div>
    </div>
  );
}

export default Game;

