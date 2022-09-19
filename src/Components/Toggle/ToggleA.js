import React, { useState } from 'react';

function ToggleA(){
    const [show,setShow] = useState(false);
    const [hide,setHide] = useState(false);

    const handleEvent = ()=>{
        
    }
    return(
        <>

            <button onClick={()=>setShow(!show) || setHide(!hide)}>Toggle Button</button>


        {show?
        <di><h2>This is first Tab</h2>
            <p>Lorem ipsum tool generator</p>
            </di>:
            <div>
            <h2>This is second Tab</h2>
            <p>Lorem ipsum tool generator</p>
            </div>
            }
            
{/* 
            <h2>This is second Tab</h2>
            <p>Lorem ipsum tool generator</p> */}

        </>
    )
}
export default ToggleA;