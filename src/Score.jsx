import React from 'react'
import "./Score.css"
export default function Score({hand}) {
if(hand.first==null){
    return null
}
else {
  return (
    <>
      <div className='hello'> 
        <div
          className="score"
          style={{
            textAlign: "center",
            margin: "10px",
            border: "solid 2px black",
          }}
        >
          <p className="okji">YOUR SCORE :- {hand.score}</p>
          <p className="okji">COMPUTER SCORE :- {hand.com}</p>
          <p className="okji">DRAW :- {hand.draw}</p>
        </div>
      </div>
      <p style={{ fontSize: "20px" }}>PLEASE PRESS AGAIN TO START NEXT ROUND</p>
    </>
  );
}}
