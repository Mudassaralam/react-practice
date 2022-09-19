import React, { useEffect, useState } from "react";
import User from "./User";

function UseEffect (props){
    const [data,setData] = useState(10);
    const [counter,setCounter] = useState(20);

    // useEffect(()=>{
    //     console.warn('UseEffect')
    // },[data]);

    // useEffect(()=>{
    //     alert("This is for counter" + counter)
    // },[counter]);
return(
    <>
        {/* <h1>useEffect With Conditions</h1>
        <h1>Data :: {data}</h1>
        <h1>Counter :: {counter}</h1> */}
        <User data={data} counter={counter}/>
        
        <button onClick={()=>{setData(data+1)}}>Update Data</button>
        <button onClick={()=>{setCounter(counter+1)}}>Update Counter</button>
    </>
)
}
export default UseEffect;