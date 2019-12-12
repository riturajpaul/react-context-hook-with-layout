import React, {Component} from 'react';

import PostView from './PostView';
import MyContext from '../MyContext';

class PostComponent extends Component{
    static contextType = MyContext;
    constructor(props) {
        super(props);       
        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            submitted: false           
        };        
        
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.formHandleChange = this.formHandleChange.bind(this);
       
    };

    formHandleChange = event => {        
        const { name, value } = event.target;        
        this.setState({ [name]: value }); 
        
       
    }
    
    formSubmitHandler = event => {
        event.preventDefault();            
        this.setState({ submitted: true });
        const { name, email,phonenumber } = this.state;
        if (name && email && phonenumber) {            
            this.setState({"postdata":this.state});                
            this.context.updateValue(this.state);             
        } 
    };
   
    render(){ 
       
        
        return(
            <PostView parentSubmitHandler={this.formSubmitHandler} parentOnChnageHandler={this.formHandleChange} formData={this.state} />   
        )
    }

}

export default PostComponent;

