import React, { useEffect, useState } from "react";

function Mounting(){

    const [counter,setCounter] = useState(10);
    useEffect(()=>{
        alert('This is updating Component')
    },[counter])
    return(
        <>
            <h1>Mounting Phase</h1>
            <h3>Counter {counter}</h3>
            <button onClick={()=>setCounter(20)}>Update Counter</button>
        </>
    )
}
export default Mounting;