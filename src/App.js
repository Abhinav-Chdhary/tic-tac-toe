import React, { useState } from "react";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import './App.css';
/*
import Box from './components/Box' for default exports
import {Box} from './components/Box' for named exports
{props.board.map((value, index) => {
                return <Box value={value} onClick={null} />;
            })}*/

function App() {
    //to keep track of board's state
    const [board, setBoard] = useState(Array(9).fill(null));
    //to keep track of current player
    const [currentPlayer, setCurrentPlayer] = useState(true);
    //to keep track of scores
    const [currentScore, setScores] = useState({ xScore: 0, oScore: 0 });
    //to keep track of game state
    const [gameOver, setGameOver] = useState(false);

    //winning conditions
    let WINS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    const handleClick = (boxInd) => {
        const updateBoard = board.map((value, index) => {
            if (index === boxInd) {
                if (currentPlayer === true) return "X";
                else return "O";
            } else return value;
        });
        const winner = checkWinner(updateBoard);
        if (winner) {
            if (winner === "X") {
                let { xScore } = currentScore;
                xScore++;
                setScores({ ...currentScore, xScore });
            } else {
                let { oScore } = currentScore;
                oScore++;
                setScores({ ...currentScore, oScore });
            }
            setGameOver(true);
        }
        setBoard(updateBoard);
        setCurrentPlayer(!currentPlayer);
    };

    const checkWinner = (board) => {
        for (let index = 0; index < WINS.length; index++) {
            const [x, y, z] = WINS[index];
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                return board[x];
            }
        }
    };
    const resetBoard = (board) => {
        setBoard(Array(9).fill(null));
        //setScores({ xScore: 0, oScore: 0 });
        setGameOver(false);
    };
    return (
        <div className="App">
            <Scoreboard scores={currentScore} player={currentPlayer} />
            <Board
                board={board}
                onClick={gameOver === true ? resetBoard : handleClick}
            />
            <button className="ResetButton" onClick={resetBoard}>
                RESET
            </button>
        </div>
    );
}

export default App;
