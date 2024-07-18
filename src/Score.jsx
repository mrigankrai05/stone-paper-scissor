import React from 'react'
import "./Score.css"
export default function Score({hand}) {
if(hand.first==null){
    return null
}
else {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0px",
      }}
    >
      <p className="okji">YOUR SCORE :- {hand.score}</p>
      <p className="okji">COMPUTER SCORE :- {hand.com}</p>
      <p style={{ fontSize: "20px" }}>PLEASE PRESS AGAIN TO START</p>
    </div>
  );
}}
