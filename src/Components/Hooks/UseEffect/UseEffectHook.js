import React, { useEffect,useState } from "react";


function UseEffectHook (){
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        console.warn('USeeffect')
    })
    
return(
    <>
        <h1>UseEffect Hook</h1>
        <h1>{count}</h1>

        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </>
);
}
export default UseEffectHook;