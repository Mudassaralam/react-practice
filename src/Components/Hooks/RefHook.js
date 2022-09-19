import React, { useRef } from "react";

function RefHook(){
 
    const RefInput = useRef(null)
    return(
        <>
           <h1>Use Ref Hook in React js</h1>
           <input type='text'  placeholder="Search here.." ref={RefInput}/>
        </>
    )

}
export default RefHook;