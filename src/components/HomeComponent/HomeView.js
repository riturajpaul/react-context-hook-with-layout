import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Container, Row } from 'reactstrap';
import './HomeStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import MyContext from '../MyContext';

var HomeView = () => {
    return (
        <Container>
            <MyContext.Consumer>
                {(context) => (
                    <div className="postlist">
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
                                    <th scope="row">1</th>
                                    <td>{context.name}</td>
                                    <td>{context.email}</td>
                                    <td>{context.phonenumber}</td>
                                </tr>                                
                            </tbody>
                        </Table>
                    </div>
                )}
            </MyContext.Consumer>
        </Container>
    )
}
export default HomeView;