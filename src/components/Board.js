import React from "react";
import { Box } from "./Box";
import './Board.css'

const Board = (props) => {
    return (
        <div className="board">
            {props.board.map((value, index) => {
                return <Box value={value} onClick={() => value === null && props.onClick(index)} />;
            })}
        </div>
    );
};

export default Board;