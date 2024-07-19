import React from 'react'
import "./reset.css"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Reset({handle}) {

  return (
    <div className='ok'>
      <Button className="but" variant="contained" onClick={()=>{
        handle({ first: null, second: null, score: 0, com: 0,draw:0 });
      }}>RESET</Button>
    </div>
  );
}
