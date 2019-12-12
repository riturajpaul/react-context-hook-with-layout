import React from 'react';
import {Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import './Layout.scss';

const MainLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Header/>
                    <Component {...matchProps} />
                <Footer/>
            </div>
        )} />
    )
};


export default MainLayout;