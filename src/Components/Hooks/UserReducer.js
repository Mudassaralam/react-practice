import React, { useReducer } from "react";

function UserReducer(){

    let INITIAL_STATE = 0;
    const reducer = (state, action)=>{
        console.log(state,action);
        if(action.type === 'INCRE'){
           return state+1;
        }
        if(action.type === 'DECRE'){
            return state-1;
        }

        return state;
    }


    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
   return(
        <>
            <h3>Use Reducer Hook</h3>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:"INCRE"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECRE"})}>Decrement</button>


        </>
    )
}
export default UserReducer;