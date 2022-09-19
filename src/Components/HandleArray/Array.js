import React from "react";
import {Table} from 'react-bootstrap'

function Array() {
  //   const names = ["ahmad", "ali", "asam", "anil", "osam","mosam"];

  const students = [
    { name: "Mudassar", email: "mudasssar@test.com", contact: 10210 },
    { name: "Ali ", email: "ali@test.com", contact: 10211 },
    { name: "Umar", email: "umar@test.com", contact: 10212 },
    { name: "Ikram", email: "Ikram@test.com", contact: 10213 },
    { name: "Mohsin", email: "mohsin@test.com", contact: 10214 },
  ];

  // arr.map((item)=>{
  //     console.log(item);
  // })

  // for(let i ; i<arr.length; i++){
  //     console.log(arr[i])
  // }

  return (
    <>
      <h1>Array Map Method and Array Listing</h1>

      <Table striped variant="danger" className="p-5">
        <tr>
        <th># ID</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Contact No</th>
          
        </tr>

        {students.map((item, index) => {
          return (
            <tr key={index}>
            <th>{index+1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          );
        })}
      </Table>
    </>
  );
}
export default Array;
