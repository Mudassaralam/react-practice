import React from 'react';

function User(props){
    const data = "Anil Sidhu";
    return(
        <>
            <h1>User Component</h1>

            <button onClick={()=>props.alert(data)} >Click Here</button>
        </>
    )
}
export default User;