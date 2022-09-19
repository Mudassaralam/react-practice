import React, { useState } from 'react';
// import './input.scss'
function InputChange (){
    const [data,setData] = useState({
        name:''
    })
    const [name,setName] = useState(false);

    const inputhandler = (e)=>{
        if(e.target.id === 'name'){
            setData({...data,name:e.target.value})
            setName(true)
        }else{
            
        }
    }
    return(
        <> 
        <div className='parent'>
            <h1 className='head1'>Heading 1</h1>
            <h1 className='head2'>Heading 2</h1>
        </div>
        <h1>Helloe</h1>
        <form>
            <label>{name?'Name':' '}</label><br/>
            <input type='text' id='name' value={data.name} placeholder={name?'':'Name'} onChange={inputhandler}/>
        </form>
        </>
    )
}
export default InputChange;