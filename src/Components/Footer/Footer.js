import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../css/style.css'

const Footer = () => {
    return (
        <div className = 'footer'>
            <Container>
                <Row>
                    <Col llg = {6} className = 'footer_l'>
                        <h2>Care Dent</h2>
                        <p>
                        Get energizing workout moves, healthy recipes, and advice on losing weight and feeling great from Health.com.
                        </p>
                    </Col>
                    <Col llg = {6}>
                        <h2>Contact</h2>
                        <p>Username@gmail.com</p>

                        <p>Damo@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                    <p className = 'text-center'>&copy;All rights reserved by Care-dent</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;