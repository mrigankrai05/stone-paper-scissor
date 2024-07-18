import React from 'react'
import "./hands.css"


export default function Hands({hand,images}) {
    if(hand.first==null){
        return (
        <>
          <div className="heading"style={{textAlign:"center"}}>
            <h2>PLEASE SELECT ANY OPTION BELOW TO START THE GAME</h2>
          </div>
        </>
        );
    }
    else{
        return (
          <>
            <div className="content">
              <div className="holder">
                <h3>YOU</h3>
                <img
                  className="img"
                  src={
                    hand.first == "scissor"
                      ? images.scissor
                      : hand.first == "hand"
                      ? images.hand
                      : images.stone
                  }
                ></img>
              </div>
              <div className="holder">
                <h3>COMPUTER</h3>
                <img
                  className="img"
                  src={
                    hand.second == "scissor"
                      ? images.scissor
                      : hand.second == "hand"
                      ? images.hand
                      : images.stone
                  }
                ></img>
              </div>
            </div>
          </>
        );
    }
}
