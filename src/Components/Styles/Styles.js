import React from 'react';
import './style.css'
import style from './custom.module.css'
function Styles (){
    return(
        <>
        <h1 className='h1tag'>Style of Css Method 1 Seperate File</h1>
        <h1 style={{backgroundColor:'black', color:'GrayText',padding:'20px'}}>Style of Css Method 2 Inline CSS</h1>
        <h1 className={style.h1motag} >Style of Css Method 2 Module CSS</h1>
        </>
    )
}
export default Styles;