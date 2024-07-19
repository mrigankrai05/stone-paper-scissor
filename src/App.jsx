import {useState} from 'react'
import './App.css'
import Hands from './hands'
import Options from './options'
import Reset from './reset'
import Result from './Result'
import Score from './Score'

function App() {
  let [hand, setHand] = useState({ first: null, second: null, score: 0 ,com:0,draw:0});
  
  let arr=["scissor","hand","stone"];

  let images = {
    hand: "../static/images/hands.png",
    stone: "../static/images/images.png",
    scissor: "../static/images/Unknown.png",
  };
  
  function setting(first,second){
    function final(){
      if (first == arr[second]) return null;
      else if (first == "stone" && second == 0) return 1;
      else if (first == "scissor" && second == 2) return 0;
      else if (first == "hand" && second == 0) return 0;
      else if (first == "scissor" && second == 1) return 1;
      else if (first == "hand" && second == 2) return 1;
      else if (first == "stone" && second == 1) return 0;
    }
    setHand((prev)=>{
      return {
        ...prev,
        first: first,
        second: arr[second],
        score: prev.score + final(),
        com: prev.com + (final()==null ? 0 : (!final())),
        draw:prev.draw + (final()==null ? 1:null)
      };
    });
  }
  return (
    <>
      <h1
        style={{
          margin: "10 auto",
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "0px",
        }}
      >
        STONE PAPER SCISSOR
      </h1>
      <Hands hand={hand} images={images} />
      
      <Score hand={hand} />
      <Options setting={setting} images={images} />
      {hand.first != null ? <Reset handle={setHand} /> : null}
    </>
  );
}

export default App
