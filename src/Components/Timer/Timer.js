import React, { useEffect, useState } from "react";
import './timerhtml.css';
function Timer(){

    const [seconds,setSeconds] = useState(30);
    const [mints,setMints] = useState();

    useEffect(()=>{
        if(seconds > 0){
            setTimeout(()=>setSeconds(seconds-1),1000)
        }

        if(seconds === 0){
            // setSeconds('Done');
            
            document.getElementById('button').style.display = 'block';
           
        }else{
           
            document.getElementById('button').style.display = 'none';
        }
       
    })  
    const startAgain = ()=>{
            setSeconds(30)
    }
    

    return(
        <> 
            <h1>Timer</h1>
        <div id="container">
            <div className="main-div" id="parentDiv">
                <div className="sec-div">
                   <p>{seconds}</p>
                </div>
            </div>
            <div className="buttonDiv">
            <button id="button" onClick={startAgain}>Start Again</button>
            </div>
            </div>

           
            
            {/* Seconds {seconds} */}
            {/* Mints :{mints} */}
           
           

            
        </>
    )
}
export default  Timer;