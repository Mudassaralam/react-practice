import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
function Prefill(){

    const [data,setData] = useState([]);
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [body,setBody] = useState()

     useEffect(()=>{
              fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((result)=>{
            result.json().then((response)=>{
                // console.warn("result",response)
                setData(response)
                setName(response[0].name)
                setEmail(response[0].email)
                setBody(response[0].body)
            })
        })
    },[])

    const deleteUser = (id)=>{
        alert(`id= ${id}`)
        // fetch(`https://jsonplaceholder.typicode.com/posts/1/comment/${id}`,{
        //     method:'DELETE'
        // }).then((result)=>{
        //     result.json().then((response)=>{
        //         console.warn('response',response)
        //     })
        // })
    }
    // Select User

    function selectuser(id){
        // alert(`This is id ${id}`)
        // console.log(data([id]))
        console.warn(data[id])
        let item = data[id];
        setName(item.name)
         setEmail(item.email)
         setBody(item.body)
    }
    return(
        <>
        <div className='row'>
        <div className='col-lg-8 col-sm-6'>
              <h1>Get Method API's Practice</h1>
            <Table variant='secondary' >
                <thead>
                    <tr>
                    <td>UserId</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                    <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                  {
                      data.map((item,i)=>{
                          return(
                              <tr >
                                   <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                                  <td>{item.body}</td>
                                  <td><button  onClick={()=>deleteUser(i+1)}>Delete</button></td>
                                  <td><button  onClick={()=>selectuser(i)}>Select</button></td>
                              </tr>
                          )
                      })
                  }
                </tbody>
            
            </Table>
            </div>
            
            <div className='col-lg-4 col-sm-6'>
            <h1>PreFill Data</h1>
                    <form>
                        <input type='text' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
                        <input type='text' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>
                        <input type='text' placeholder='Body' value={body} onChange={(e)=>{setBody(e.target.value)}} /><br/><br/>

                        <button>Save Data</button>

                    </form>
            </div>
            </div>
        </>
    )
}
export default Prefill;