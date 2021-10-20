import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import css from '../css/style.css'

const Footer = () => {
    return (
        <div className = 'footer'>
            <Container>
                <Row>
                    <Col lg = {3} className = 'footer_l'>
                        <h2>Care Dent</h2>
                        <p>
                        Get energizing workout moves, healthy recipes, and advice on losing weight and feeling great from Health.com.
                        </p>
                    </Col>
                    <Col lg = {3}>
                        <div className = 'footer_m'>
                        <h4>Explore</h4>
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className = 'popular_ser'>
                            <h4>Popular Services</h4>
                            <p>Fixing Teeth</p>
                            <p>Teeth Washing</p>
                            <p>Teeth Protection</p>
                            <p>Shining Teeth</p>
                        </div>
                    </Col>
                    <Col lg = {3}>
                        <div className = 'contact'>
                        <h4>You've question?</h4>
                        <h2>Get a quate</h2>
                        <p>+949 400 2926</p>
                        <h2>Send email</h2>
                        <p>Damo@gmail.com</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg = '12'>
                    <div className = 'copy'>
                    <p className = 'text-center'>&copy;All rights reserved by Care-dent</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;