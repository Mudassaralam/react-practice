import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

function PostMethod(){
    
    const [data,setData] = useState({
        "jsonrpc": "2.0",
     "params":{
        "subject":"",
        "first_name":"",
        "company":"",
        "country":"",
        "email":"",
        "mobile":"",
        "usecase":"",
        "message":""
    }});

    const saveData = ()=>{
        console.log("here",data)
        
        fetch('http://143.110.188.39:8069/create/lead',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log('result',result)
        })   
    }
    const inputHandler = (e)=>{
        if(e.target.id === 'name'){
            setData({...data, name:e.target.value})
        }
        if(e.target.id === 'takenaka_id'){
            setData({...data,takenaka_id:e.target.value})
        }
        if(e.target.id === 'username'){
            setData({...data,user_name:e.target.value})
        }
        if(e.target.id === 'email'){
            setData({...data,email:e.target.value})
        }
        if(e.target.id === 'password'){
            setData({...data,password:e.target.value})
        }
        if(e.target.id === 'phone'){
            setData({...data,phone:e.target.value})
        }
        if(e.target.id === 'branchId'){
            setData({...data,branchId:e.target.value})
        }
        if(e.target.id === 'roleId'){
            setData({...data,roleId:e.target.value})
        }
    }
 
    return(
        <>
            <h1>Post Method API</h1>
            <form>
                <input type='text' placeholder='Name' id='name' name='name' value={data.params.name} onChange={inputHandler} /><br/><br/>
                <input type='text' placeholder='Takanaka Id' id='takenaka_id' name='takenaka_id' value={data.params.takenaka_id} onChange={inputHandler}/><br/><br/>
                <input type='text' placeholder='User Name' name='user_name' id='username' value={data.params.user_name} onChange={inputHandler} /><br/><br/>
                <input type='text' placeholder='company' name='Email' id='email' value={data.params.email} onChange={inputHandler}  /><br/><br/>
                <input type='email' placeholder='email' name='"password" ' value={data.params.password} id='password' onChange={inputHandler}  /><br/><br/>
                <input type='number' placeholder='mobile' name="phone" id='phone' value={data.params.phone}  onChange={inputHandler} /><br/><br/>
                <input type='text' placeholder='usecase' name='branchId' id='branchId' value={data.params.branchId} onChange={inputHandler}  /><br/><br/>
                <input type='text' placeholder='message' name='roleId'  id='roleId' value={data.params.roleId} onChange={inputHandler} /><br/><br/>
                <button type='button' onClick={saveData}>Save Data</button>
            </form>

         
        </>
    )
}
export default PostMethod;