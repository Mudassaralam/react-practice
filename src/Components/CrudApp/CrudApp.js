import React, { useState } from 'react';

function CrudApp (){

  const [user, setUser] = useState([
    { name: "Zain", email: "sdwedw@gmail.com"},
  ]);
  const [data, setData] = useState({ name: "", email: ""});

  // const [error, setError] = useState({
  //   nameError: "",
  //   emailError: "",
  //   passwordError: "",
  //   formError: "",
  // });

  //Input handler
  const inputhandler = (e)=>{
    setData({...data, name:e.target.value});
    setData({...data, email:e.target.value});
    // console(e.target.value)
   
  }
  const namehandler =(e)=>{
    setData({...data, name:e.target.value});
    console.log(data.name.value)
  }
    return(
        <>
            <form>
                <input type='text' placeholder='name ' id='name'value={data.name} onChange={namehandler}/>
                <input type='email' placeholder='email ' id='email' value={data.email} onChange={inputhandler} />
                <input type="submit" id="btn" />
            </form>
        </>
    )
}
export default CrudApp;