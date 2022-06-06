import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavSection.css'
import { Link } from 'react-router-dom';


const componentName = () => {
    return (
        <div>

            <Navbar className='nav' collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><h1 className='logo'>COVID<p className='logosup'>Defense</p></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/' className='nav-option' >Home</Nav.Link>
                            <Nav.Link as={Link} to='/dashboard' className='nav-option' >Dashboard</Nav.Link>
                            <Nav.Link as={Link} to='/contact' className='nav-option' >Contact</Nav.Link>
                            <button className='logOb '>LogOut</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default componentName;