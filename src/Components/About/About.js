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
                        <h3 className='title text-center'>About</h3>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg={3}>
                        <div className ='about_item'>
                            <img src='https://template.hasthemes.com/decare/decare/images/choose/h2.png' />
                            <p>
                                22 Years Of Experience
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className ='about_item'>
                            <img src='https://template.hasthemes.com/decare/decare/images/choose/h1.png' />
                            <p>
                            24 Hours Dental Services
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className ='about_item'>
                            <img src='https://template.hasthemes.com/decare/decare/images/choose/h4.png' />
                            <p>
                               Flexible Payment Options
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className ='about_item'>
                            <img src='https://template.hasthemes.com/decare/decare/images/choose/h3.png' />
                            <p>
                            Offering Sedation Services
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg = {12} className ='about_tips'>
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