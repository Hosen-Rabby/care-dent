import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../css/style.css'

const NotFound = () => {
    return (
        <div className = 'not'>
            <h3>Sorry page Not found.</h3>
           <Container>
               <Row>
                   <Col lg={12}>
                   <img src = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1129&q=80' className='img-fluid' alt = 'not found'/>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default NotFound;