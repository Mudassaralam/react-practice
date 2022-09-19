import React, { useState } from 'react';
import './Formsvalid.css';
function FormValid(){
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [fnameErr,setFnameErr] = useState(false);
    const [lnameErr,setLnameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [messagErr , setMessagErr] = useState(false);
    const [messagSecErr,setMessagSecErr] = useState(false);
    const [afterSubmit , setAfterSubmit] = useState(false);


 
    function Fnamehandle(e){
        // console.log(e.target.value);
        let item = e.target.value;
        if(item.length<3){
            setFnameErr(true);
        }else{
            setFnameErr(false);
        }
        setFname(e.target.value);
    }
    function lnamehandle(e){
        // console.log(e.target.value);
        setLname(e.target.value);
        let item = e.target.value;
        if(item.length<3){
            setLnameErr(true);
        }else{
            setLnameErr(false);
        }
    }
    function emailHandle(e){
        // console.log(e.target.value);
        setEmail(e.target.value);
        let item = e.target.value;
        if(item.length < 5){
            setEmailErr(true);
        }else{
            setEmailErr(false);
        }
    }
    function messageHandle(e){
        // console.log(m.target.value);
        setText(e.target.value);
        let item = e.target.value;
        if(item.length >= 30 ){
            setMessagErr(true)
        }else{
            setMessagErr(false)
        }
        if(item.length < 5){
            setMessagSecErr(true);
        }else{
            setMessagSecErr(false);
        }
    }
    
    function onFormsubmit(e){
        console.log(fname,lname,email,text);
        e.preventDefault();
        
        if(fname.length < 3 || lname.length < 3 || email.length < 5 || text.length > 20){
            alert('Data is Not Submitted Please Check The Validations')
        }else{
           setAfterSubmit(true)
        }
    }

    return(
        <>
        <div className='container'>
            <h2>Form Validations</h2>
            <div className='row'>
            <div className='col-xl-8 col-md-8 col-sm-12 offset-2'>
            <form onSubmit={onFormsubmit}>
                    <div className='mb-3'>
                        <label >First Name</label>
                        <input className='form-control' type='text' placeholder='First Name' required onChange={Fnamehandle}/>{fnameErr?<p className='Valid-text'>Must Be Greater Than 3 Characters.</p>:null}
                    </div>
                    <div className='mb-3'>
                        <label >Last Name</label>
                        <input className='form-control'type='text' placeholder='Last Name' required onChange={lnamehandle}/>{lnameErr?<p className='Valid-text'>Must Be Greater Than 3 Characters.</p>:null}
                    </div>
                    <div className='mb-3'>
                        <label >Email</label>
                        <input className='form-control'type='email' placeholder='Email Address' required onChange={emailHandle}/>{emailErr?<p className='Valid-text'>Email Must Be Includes '@gmail.com'</p>:null}
                    </div>
                    <div className='mb-3'>
                        <label >Write Us Query</label>
                        <textarea className='form-control' placeholder='Write Message...' onChange={messageHandle}/>{messagErr?<p className='Valid-text'>Query Must Be Less Than 30 Words</p>:null}{messagSecErr?<p className='Valid-textM'>Write Your Message Anyway.</p>:null}
                    </div>
                    <button type='submit' className='btn btn-dark' >Submit</button>
                    {afterSubmit?<p className='Valid-textM'>Form Is Submitted Successfully</p>:null}
            </form>
            </div> 
            </div>
        </div>


        </>
    )
}
export default FormValid;