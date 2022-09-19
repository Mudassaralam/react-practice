import React, { useEffect, useState } from "react";

export default function User(props) {
    const[message,setMessage]  = useState('Hi How are you?')
    
    useEffect(()=>{
        console.warn("This is the data" + ""+ props.data)
    },[props.data])

   useEffect(()=>{
       setTimeout(setMessage("Yess I Am Fine"),5000)
   })
  return (
    <div>
      <h1>useEffect With Conditions</h1>
      <h1>Data :: {props.data}</h1>
      <h1>Counter :: {props.counter}</h1>
      <h2>{message}</h2>
    </div>
  );
}
