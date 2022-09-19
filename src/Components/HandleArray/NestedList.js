import React from "react";
import { Table } from 'react-bootstrap'

function NestedList() {
  const users = [
    {
      name: "Ali",
      email: "ali@test.com",
      address: [
        { Hn: "12", city: "Okara", country: "Pakistan" },
        { Hn: "13", city: "Sahiwal", country: "India" },
        { Hn: "14", city: "Okara", country: "US" },
        { Hn: "15", city: "FSD", country: "UK" },
      ],
    },
    {
      name: "Ahmad",
      email: "ahmad@test.com",
      address: [
        { Hn: "12", city: "Okara", country: "Pakistan" },
        { Hn: "13", city: "Sahiwal", country: "India" },
        { Hn: "14", city: "Okara", country: "US" },
        { Hn: "15", city: "FSD", country: "UK" },
      ],
    },
    {
      name: "Asam",
      email: "asam@test.com",
      address: [
        { Hn: "12", city: "Okara", country: "Pakistan" },
        { Hn: "13", city: "Sahiwal", country: "India" },
        { Hn: "14", city: "Okara", country: "US" },
        { Hn: "15", city: "FSD", country: "UK" },
      ],
    },
    {
      name: "Mudassar",
      email: "mudassar@test.com",
      address: [
        { Hn: "12", city: "Okara", country: "Pakistan" },
        { Hn: "13", city: "Sahiwal", country: "India" },
        { Hn: "14", city: "Okara", country: "US" },
        { Hn: "15", city: "FSD", country: "UK" },
      ],
    },
  ];

  return (
      <>
          <h1>Nested Array List</h1>

          <Table variant="dark">
               <thead>
               <tr>
                    <td>#ID</td>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Address</th>
                   </tr>
               </thead> 

               <tbody>
               {
                 users.map((item,index)=>{
                   return(
                    <tr>
                    <td>{index+1}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>
                   <Table variant="dark">
                   <tbody>
                   {
                     item.address.map((li)=>{
                      return(
                        <tr>
                          <td>{li.Hn}</td>
                          <td>{li.city}</td>
                          <td>{li.country}</td>
                        </tr>
                      )
                     })
                   }
                   </tbody>
                   </Table>
                   </td>
                 </tr>
                   )
                 })
               }
                 
               </tbody>
          </Table>
      </>
  );
}
export default NestedList;
