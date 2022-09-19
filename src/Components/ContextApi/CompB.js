import React, { useContext } from "react";
import CompC from "./CompC";
import { FirstName ,LastName,BaseLocat,FloorNo } from './ContextApis';

function CompB(){
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const locat = useContext(BaseLocat);
    const floorno = useContext(FloorNo);
   
    return(
        <>
           <h1>This is the Agency {fname} {lname} Situated In {locat} and Floor is {floorno}</h1>
           {/* <CompC /> */}
        </>
    )
}
export default CompB;