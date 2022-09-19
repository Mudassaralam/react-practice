import { render } from '@testing-library/react';
import React from 'react';
import Student from './Student';

class ComponentWillUnmount extends React.Component{

    constructor(){
        super();
        this.state={
            show:true,
        }
    }
  
    render(){
        return(
            <>
                <h1>Component Will Unmount Method</h1>
                {
                    this.state.show?<Student/>:<h1>Student Removed</h1>
                }
                
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button>
            </>
        )
    }
}
export default ComponentWillUnmount;