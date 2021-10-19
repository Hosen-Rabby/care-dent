import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../css/style.css'
const About = () => {
    return (
        <div>
        <div className = 'abouts'>
            <Container>
                <Row>
                    <Col lg = {12}>
                        <h3>About our care</h3>
                        <p>
                        Our care systems are organizations established to meet the health needs of targeted populations
                        </p>
                       
                    </Col>
                </Row>

                <Row>
                    <Col lg = {12}>
                        <h5>Dental Care Tips</h5>
                         <ul>
                            <li>Don't go to bed without brushing your teeth</li>
                            <li>Brush properly</li>
                            <li>Don't neglect your tongue.</li>
                            <li>Treat flossing as important as brushing.</li>
                            <li>Use a fluoride toothpaste.</li>
                            <li>Don't let flossing difficulties stop you.</li>
                            <li>Consider mouthwash</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default About;