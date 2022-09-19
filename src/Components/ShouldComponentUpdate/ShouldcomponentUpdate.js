import React from 'react';

class ShouldcomponentUpdate extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    shouldComponentUpdate(){
        console.warn("shouldcomponentupdate",this.state.counter);
        if(this.state.counter>5 && this.state.counter < 10){
            return true;

        }
        
    }
    render(){
        return(
            <>
                <h1>Should Component Update Method</h1>
                <p>{this.state.counter}</p>
                <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update</button>

            </>
        )
    }
}
export default ShouldcomponentUpdate;