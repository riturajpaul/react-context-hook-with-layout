import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {

    state = {
        name: 'user',
        email: 'email',
        phonenumber: 'phonenumber',
        // data : []
       
    };
    updateValue = (key, val) => {     
        this.setState(key,val);
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