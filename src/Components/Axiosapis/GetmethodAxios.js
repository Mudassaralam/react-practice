import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import axios from "axios";

function GetmethodAxios(){

    const [user,setUser] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response)
            const post = response.data;
            setUser(post)
        })
    },[])

    //Post Method

    return(
        <>
            <h2>Get Method By Axios</h2>

            <Table>
            <thead>
                <tr>
                    <td>UserID</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item,index)=>{
                        return(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                        )
                        
                    })
                }
            </tbody>
            </Table>
        </>
    )
}
export default GetmethodAxios;