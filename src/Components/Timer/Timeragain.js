import React, { useEffect, useState } from "react";

function Timeragain(){

    const [seconds,setSeconds] = useState(30);
    const [mints,setMints] = useState(0);

    var timer ;

 
        useEffect(()=>{
            timer = setInterval(()=>{
                 setSeconds(seconds-1)
                //  if(seconds === ){
                //     setMints(mints+1);
                //     setSeconds(0);
                // }
                if(seconds === 0){
                    setSeconds(30);
                    if(mints === 0){
                        clearInterval(timer);
                    }else{
                        setMints(mints - 1)
                        setSeconds(59);
                    }
                    if(seconds === 0){
                       setSeconds('Start Again To Refresh The page')
                    }else{
                        setSeconds('Start Again To Refresh The page')
                    }
            
                    
                }
            },1000)
            return(()=>clearInterval(timer));
            });
    
    
   
      
   

    return(
        <>


            Seconds {seconds}<br/>
            {/* <button onClick={}>Timer</button> */}
        </>
    )
}
export default Timeragain;