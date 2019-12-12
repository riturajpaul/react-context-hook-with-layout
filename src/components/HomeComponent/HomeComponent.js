import React, {Component}  from 'react';
import MyProvider from '../MyProvider';

import PostComponent  from "../PostComponent/PostComponent";
import HomeView from './HomeView';

class HomeComponent extends Component{

    render(){
        return (
            <MyProvider>
                <PostComponent />
                <HomeView/>               
            </MyProvider>
        )
    }
}  
export default HomeComponent;