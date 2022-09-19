import React from 'react';
import User from './User'
function LiftingStateUp(){

    function ParentAlert(data){
        alert(data) 
    }
    return(
        <>
            <h1>Lifting State Up</h1>
            <User alert= {ParentAlert}/>
        </>
    )
}
export default LiftingStateUp;