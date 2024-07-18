import React from 'react'
import "./option.css"


export default function Options({setting,images}) {
    function generate(){
        return Math.floor(Math.random()*3);
    }
    function done(event){
        console.log(event.currentTarget.value);
        let a = event.currentTarget.value;
        let rand=generate();
        setting(a,rand);
    }
  return (
    <div className="option">
      <button value="stone" onClick={done} className="button">
        <img src={images.stone} className="image"></img>
      </button>
      <button value="hand" onClick={done} className="button">
        <img src={images.hand} className="image"></img>
      </button>
      <button value="scissor" onClick={done} className="button">
        <img src={images.scissor} className="image"></img>
      </button>
    </div>
  );
}
