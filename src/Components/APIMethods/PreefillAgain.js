import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
function PreefillAgain() {
  const [data, setData] = useState();

const [name,setName] = useState();
const [email,setEmail] = useState();
const [body,setBody] = useState()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      (result) => {
        result.json().then((response) => {
          // console.warn('Response',response)
          setData(response);
        //   setName(response[0].name)
        //   setEmail(response[0].email)
        //   setBody(response[0].body)
        });
      }
    );
  }, []);

  //Preefill Handler

  const updateHandler = (id)=>{

    alert(`The id of this row is ${id}`);
  }

  return (
    <>
      <h1>PreeFill Data</h1>
      <div className="col-lg-8 col-sm-6">
        <Table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Body</td>
              <td>Delete</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                  <td><button>Delete</button></td>
                  <td><button onClickCapture={()=>updateHandler()}>Update</button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="col-lg-4 col-sm-6">
          <h1>PreFill Data</h1>
          <form>
            <input type="text" id="name" placeholder="Name" value={name} />
            <br />
            <br />
            <input type="text" id="email" placeholder="Email" value={email} />
            <br />
            <br />
            <input type="text" id="body" placeholder="Body" value={body}  />
            <br />
            <br />

            <button>Save Data</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default PreefillAgain;
