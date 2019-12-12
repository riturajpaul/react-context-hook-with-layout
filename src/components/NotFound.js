import React from 'react';
import { Link } from 'react-router-dom';
const divAlign = {
    fontSize: '20px',
    textAlign: 'center'   
};
const pDiv = {
    margin: '20%'
};
const NotFound = () => (

    <div style={pDiv}>
        <div style={divAlign}>Page NotFound</div>
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);
export default NotFound;