import React from 'react';

class Student extends React.Component{
    constructor(){
        super();
    }
    componentWillUnmount(){
        alert('componentWillUnmount');
    }
    render(){
        return(
            <>
            <h1>Student Component</h1>


            </>
        )
    }
}
export default Student;