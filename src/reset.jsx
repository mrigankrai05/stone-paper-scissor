import React from 'react'
import "./reset.css"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Reset({handle}) {

  return (
    <div className='ok'>
      <Button className="but" variant="contained" onClick={()=>{
        handle({first:null,second:null});
      }}>RESET</Button>
    </div>
  );
}
