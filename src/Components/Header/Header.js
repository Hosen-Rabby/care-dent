import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {NavLink, Link,Route} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {HashLink } from 'react-router-hash-link';
import css from '../css/style.css';

const Header = () => {
    const {users, logOut} = useAuth();
    // console.log(email)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky = 'top'>
                <Container>
                <Navbar.Brand href="/home">Care Dent</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                        {users?.email ?
                           <Button onClick ={logOut} className = 'b_btn'>Logout</Button>
                           :
                           <Nav.Link as= {HashLink} to = '/login' className = 'b_btn'>Login</Nav.Link>
                        }
                        </Nav>
                        <Navbar.Text>
                            <a href = '#login'>{users?.displayName}</a>
                            {/* <a href = '#login'>{users?.email.substring(0, users.email.lastIndexOf("@"))}</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;