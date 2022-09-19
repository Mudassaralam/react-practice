import React, { useState } from "react";
import UserPrvprops from "./UserPrvprops";

function PreviPops(){

    const [count,setCount] = useState(0);

    return(
        <>
            <h2>Previous Props</h2>
            <UserPrvprops count={count} />
            <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update</button>
        </>
    )
}
export default PreviPops;