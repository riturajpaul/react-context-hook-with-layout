import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem   
} from 'reactstrap';

var Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return ( 
        <div>
            <Navbar color="light" light expand="md">
                <Link to="/"><span className="logo">React Conext</span></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>            
                    </Nav>                    
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header;