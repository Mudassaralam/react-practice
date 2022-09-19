import React, { useState } from 'react';

function Loginapi(){
    const [data,setData] = useState({
        email:'',
        password:''
    })


        const saveData =()=>{
            // console.log(data);
            // fetch('http://192.168.1.180:5001/takenaka/login',{
            //     method:'POST',
            //     headers:{
            //         'Accept':'application/json',
            //         'Content-type':'application/json'
            //     },
            //     body:JSON.stringify(data).then((result)=>{
            //         console.log(result)
            //     })
               
            // })
            // console.log(data);
            fetch('http://192.168.1.180:5001/takenaka/login',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((result)=>{
                console.warn('result',result)
            })
            console.log(data)   
            
        }

        const inputHandler = (e)=>{
            if(e.target.id === 'email'){
                setData({...data,email:e.target.value})
            }
            if(e.target.id === 'password'){
                setData({...data,password:e.target.value})
            }

        }
    return(
        <>  
            <h1>Login Method</h1>
            <div>
                <input type='email' placeholder='Email' id='email' value={data.email} onChange={inputHandler}/><br/><br/>
                <input type='password' placeholder='Password' id='password' value={data.password} onChange={inputHandler}/><br/><br/>
                <button onClick={saveData}>Login</button>
            </div>
        </>


    )
}
export default Loginapi;