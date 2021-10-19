import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import css from '../css/style.css'
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
        <div className = 'banner'>
            <div className = 'overlay'>
            <Container>                
                <Row>
                    <Col sm={12} lg={6}>
                        <h3 className = 'text-uppercase banner_h3'>Best Dental care services</h3>
                        <p className = 'text-start'>Care Dent provides free continuing education, patient education and practice management resources to help dental professionals succeed with their</p>
                    </Col>
                    <Col sm={12} lg={6}>
                        <img src = 'https://template.hasthemes.com/decare/decare/images/slider/1.png' alt=''/>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        <div id = 'about'>
                <About></About>      
            
        </div>
        <div id = 'services'>
                <Services></Services>      
            
        </div>
        <div id = 'contact'>
                <Contact></Contact>      
            
        </div>

        </div>
    );
};

export default Home;