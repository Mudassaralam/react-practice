import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'

function GetMethod(){
    const [data,setData] = useState([]);
    
    // Get Method API

    // useEffect(()=>{
    //           fetch('http://192.168.1.180:5001/takenaka/Users/a31b8d80-af27-11ec-9ca9-d97d045d56f8').then((result)=>{
    //         result.json().then((response)=>{
    //             // console.warn("result",response)
    //             setData(response)
    //         })
    //     })
    // },[])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
      result.json().then((response)=>{
          // console.warn("result",response)
          setData(response)
      })
  })
},[])



    // Delete Method With API
    const deleteUser = (id)=>{
        // alert(`id= ${id}`)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((response)=>{
                console.warn('response',response)
            })
        })
    }
    return(
        <>
            <h1>Get Method API's Practice</h1>
            <Table variant='secondary' >
                <thead>
                    <tr>
                    <td>UserId</td>
                    <td>User Name</td>
                    <td>City</td>
                    <td>Delete</td>
                    {/* <td>Takenaka Id</td>
                    <td>Role</td>
                    <td>Name</td>
                    <td>Country</td>
                    <td>Branch</td>
                    <td>Active</td> */}
                    </tr>
                </thead>
                <tbody>
                  {
                      data.map((item,i)=>{
                          return(
                              <tr id={i}>
                                   <td>{item.id}</td>
                                  <td>{item.title}</td>
                                  <td>{item.body}</td>
                                  <td><button onClick={()=>deleteUser(i+1)}>Delete</button></td>
                                  {/* <td>{item.takenaka_id}</td>
                                  <td>{item.role}</td>
                                  <td>{item.name}</td>
                                  <td>{item.country}</td>
                                  <td>{item.branch}</td>
                                  <td>{item.active}</td> */}
                              </tr>
                          )
                      })
                  }
                </tbody>
            
            </Table>
        </>
    )
}
export default GetMethod;