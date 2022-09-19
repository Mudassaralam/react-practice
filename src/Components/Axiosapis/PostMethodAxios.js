import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import axios from 'axios';

function PostMethodAxios(){
    
    const [data,setData] = useState({
        "name":"",
        "takenaka_id":"",
        "user_name":"",
        "email":"",
        "password":"",
        "phone":"",
        "branchId":"",
        "roleId":""
    });

    const saveData = ()=>{
        // axios.post('http://192.168.1.180:5001/takenaka/newUser',{
        //     name:'',
        //     takenaka_id:'',
        //     user_name:'',
        //     email:'',
        //     password:'',
        //     phone:'',
        //     branchId:'',
        //     roleId:''
        // }).then((response)=>{
        //     console.log(response);
        //     setData(response.data)

        // }).catch((error)=>{
        //     console.log('Error is',error)
        // })
        console.log(data);
   
    }
    const inputHandler = (e)=>{
        if(e.target.id === 'name'){
            setData({...data,name:e.target.value})
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
                <input type='text' placeholder='Name' id='name' name='name' value={data.name} onChange={inputHandler} /><br/><br/>
                <input type='number' placeholder='Takanaka Id' id='takenaka_id' name='takenaka_id' value={data.takenaka_id} onChange={inputHandler}/><br/><br/>
                <input type='text' placeholder='User Name' name='user_name' id='username' value={data.user_name} onChange={inputHandler} /><br/><br/>
                <input type='email' placeholder='email' name='Email' id='email' value={data.email} onChange={inputHandler}  /><br/><br/>
                <input type='password' placeholder='Password' name='"password" ' value={data.password} id='password' onChange={inputHandler}  /><br/><br/>
                <input type='number' placeholder='phone' name="phone" id='phone' value={data.phone}  onChange={inputHandler} /><br/><br/>
                <input type='text' placeholder='Branch Id' name='branchId' id='branchId' value={data.branchId} onChange={inputHandler}  /><br/><br/>
                <input type='text' placeholder='Role Id' name='roleId'  id='roleId' value={data.roleId} onChange={inputHandler} /><br/><br/>
                <button type='button' onClick={saveData}>Save Data</button>
            </form>

         
        </>
    )
}
export default PostMethodAxios;