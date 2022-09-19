import React from 'react';
import User from './User';

function ReuseComp (){
    const Users = [
        {name:'Ali',email:'ali@test.com',address : '112'},
        {name:'Ahmad',email:'ahnad@test.com',address : '113'},
        {name:'Asam',email:'asam@test.com',address : '114'},
        {name:'AKram',email:'akram@test.com',address : '115'},
    ]
    const onchage = ()=>{
        alert('Hellow')
    }
  
   
    return(

        <>

            <h1>Reuse Components</h1>
            
            {
                Users.map((item)=>{
                    return(
                        <div>
                        <User data={item} oonchage={onchage} />
                        </div>
                    )
                })
            }
        </>
    )
}
export default ReuseComp;