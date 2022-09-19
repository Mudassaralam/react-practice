import userEvent from "@testing-library/user-event";
import React, { useMemo, useState } from "react";

function MemoHook(){
    const [count,setCount] = useState(0);
    const [item,setItem]  = useState(10);

    const letCountAgain = useMemo(function letCount(){
        console.warn('letcount')
            return count*5;
    },[count])
    

    return(
        <>
                <h1>UseMemo Hook</h1>
                <h2>{count}</h2>
                <h2>{item}</h2>
                <h2>Function : {letCountAgain}</h2>
                <button onClick={()=>setCount(count+1)}>Update Count</button>
                <button onClick={()=>setItem(item*10)}>Update Item</button>

        </>
    )
}
export default MemoHook;