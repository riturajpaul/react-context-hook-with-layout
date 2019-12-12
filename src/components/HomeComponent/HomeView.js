import React from 'react';
import { Table, Container } from 'reactstrap';

import './HomeStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import MyContext from '../MyContext';

var HomeView = () => {

    return (
        <Container>
            <MyContext.Consumer>
                {(context) => {

                    if (context.data.length > 0) {
                        return <div className="postlist">
                            <h3 >Post List <FontAwesomeIcon icon={faCoffee} />&nbsp;&nbsp;&nbsp;
                        </h3>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {context.data.map((item, index) => <tr key={index}><td>{index + 1}</td><td>{item.name}</td><td>{item.email}</td><td>{item.phonenumber}</td></tr>)}
                                </tbody>
                            </Table>
                        </div>
                    }
                    else {
                        return <div className="postlist">
                            <h3 >Post List <FontAwesomeIcon icon={faCoffee} />&nbsp;&nbsp;&nbsp;
                            </h3>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan="4">No Data Found</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    }
                }}
            </MyContext.Consumer>
        </Container>
    )
}
export default HomeView;