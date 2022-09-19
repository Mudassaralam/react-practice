import React from 'react';
import { BrowserRouter as Router , Link, Switch , Route } from 'react-router-dom';
import User from './User'
function Drouting(){

    const users = [
        {id:1, name: 'Ali', email:'ali@test.com'},
        {id:2, name: 'Ahmad', email:'ahmad@test.com'},
        {id:3, name: 'Asam', email:'asam@test.com'},
        {id:4, name: 'Osam', email:'osam@test.com'}
    ]
    return(
        <>
                <h1>Dynamic Routing</h1>
                <Router>
                {
                    users.map((item)=>{
                        return(
                            <div>
                              <Link to={'/user/'+item.id +"/" +item.name}> <li>{item.name}</li></Link>
                            </div>
                        )
                    })
                }
                <Route path='/users/:name'> <User /></Route> 
</Router>
 
        </>
    )
}
export default Drouting;