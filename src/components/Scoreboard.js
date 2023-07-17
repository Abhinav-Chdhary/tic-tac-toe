import React from 'react';
import './Scoreboard.css'

const Scoreboard = (props) => {
    const {xScore, oScore} = props.scores;
    const currentPlayer = props.currentPlayer;
  return (
    <div className='scoreBoard'>
        <span className='Xscore'>X - {xScore}</span>|
        <span className='Oscore'>O - {oScore}</span>
        </div>
  )
}
export default Scoreboard;