import React from 'react';
import { withRouter } from 'react-router-dom'

function User(prop){

    console.warn(prop.match.params.id)
    return(
        <>
        <h2>Hi this is id no  {prop.match.params.ids}</h2>


        <h2>{prop.match.params.id === '1' ?<h2> This is id {prop.match.params.id} And Person 1 </h2>:null }</h2>
        {/* <h2>{prop.match.params.id === '2' ?<h2>Person 2</h2>:null }</h2> */}
        {/* <h2>{prop.match.params.id === '3' ?<h2>Person 3</h2>:null }</h2> */}
        {/* <h2>{prop.match.params.id === '4' ?<h2>Person 4</h2>:null }</h2> */}
        </>
    )
}
export default withRouter(User);