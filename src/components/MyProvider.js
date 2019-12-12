import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {

    state = {        
        data : []       
    };
    updateValue = (details) => { 
        this.state.data.push(details)       
        this.setState(this.state);      
     }
    render() {
        return (
            <MyContext.Provider value={{...this.state,updateValue:this.updateValue}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}
export default MyProvider;