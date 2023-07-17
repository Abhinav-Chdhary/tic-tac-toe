import React from 'react';
import './Box.css';

export const Box = (props) => {
    const style = props.value==="X"?"BoxX":"BoxO";
  return (
    <button className={style} id='Box' onClick={props.onClick}>{props.value}</button>
  )
}


