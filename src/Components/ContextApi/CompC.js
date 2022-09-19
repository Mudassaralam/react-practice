import React from "react";
import { FirstName ,LastName,BaseLocat,FloorNo } from './ContextApis'

function CompC(){

    return(
        <>
            {/* <h1>This is the Child Component</h1> */}
            <FirstName.Consumer>
                {(fname)=>{
                    return(
                        <LastName.Consumer>
                            {(lname)=>{
                                return(
                                    <BaseLocat.Consumer>
                                        {(location)=>{
                                            return(
                                                <FloorNo.Consumer>
                                                    {(floorno)=>{
                                                        return(
                                                            <h1>This is the Agency {fname} {lname} Situated In {location} and Floor no is {floorno}</h1>
                                                        )   
                                                    }}
                                                </FloorNo.Consumer>   
                                            )
                                        }}
                                    </BaseLocat.Consumer>
                                ) 
                            }}
                        </LastName.Consumer>  
                    )
                }}
            </FirstName.Consumer>
        </>         
    )
}
export default CompC;