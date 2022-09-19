import React from 'react';

function User(props){
    // const onchage = ()=>{
    //     alert('Hellow')
    // }
  
    return(
        <>
            <div>
                <span>{props.data.name}</span>
                <span>{props.data.email}</span>
                <button onClick={props.oonchage}> Button{props.data.address}</button>
            </div>
        </>
    )
}
export default User;