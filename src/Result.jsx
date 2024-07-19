import React from "react";
import "./result.css";


export default function Result({ hand ,update}) {

  if (hand.first == null) {
    return null;
  } else if (hand.first == hand.second) {
    return (
      <>
        <h2>IT'S DRAW</h2>
      </>
    );
  } else if (hand.first == "stone" && hand.second == "scissor") {
    return (
      <>
        <h2>YOU WON</h2>
      </>
    );
  } else if (hand.first == "scissor" && hand.second == "stone") {
    return (
      <>
        <h2>YOU LOSE</h2>
      </>
    );
  } else if (hand.first == "stone" && hand.second == "hand") {
    return (
      <>
        <h2>YOU LOSE</h2>
      </>
    );
  } else if (hand.first == "hand" && hand.second == "stone") {
    return (
      <>
        <h2>YOU WON</h2>
      </>
    );
  } else if (hand.first == "hand" && hand.second == "scissor") {
    return (
      <>
        <h2>YOU LOSE</h2>
      </>
    );
  } else if (hand.first == "scissor" && hand.second == "hand") {
    return (
      <>
        <h2>YOU WON</h2>
      </>
    );
  }
}
