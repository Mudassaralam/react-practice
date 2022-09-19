import React, { useEffect, useRef } from "react";

function UserPrvprops(props){

    const lastValue = useRef();

    useEffect(()=>{
        lastValue.current = props.count;
    })
    const PreviProp = lastValue.current;
    console.warn(PreviProp)
    const currentValue = props.count;

    // This is the difference
    if(currentValue-PreviProp === 4){
        console.log('This is the difference')
    }

    return(
        <>  
        <h1>User Component</h1>
        <h2>Current Value {props.count}</h2>
        <h2>Previout Value Value {PreviProp}</h2>

      

        {
             
        }

        </>
    )
}
export default UserPrvprops;