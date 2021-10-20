import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../css/style.css'

const Contact = () => {
    return (
        <div className = 'contacts'>
            <Container>
                <Row>
                    <Col lg ={12}>
                        <h3 className='title text-center'>Contact</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className = 'have_que'>
                        <p>Conact with us</p>
                        <h2>
                        Have any question?<br></br>
                        feel free to contact with us.
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg ={4}>
                        <h4>Mobile:</h4>
                        <p>+660 256 24857</p>
                        <p>+980 256 24857</p>
                    </Col>
                    <Col lg ={4}>
                        <h4>Email</h4>
                        <p>username@gmail.com</p>
                        <p>demain@gmail.com</p>
                    </Col>
                    <Col lg ={4}>
                        <h4>Address</h4>
                        <p>House No 27, Road No 07, EastRoad</p> 
                        <p>Dhaka, Bangladesh</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Contact;