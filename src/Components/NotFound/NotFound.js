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
                   <img src = 'https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg' className='img-fluid' alt = 'not found'/>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default NotFound;