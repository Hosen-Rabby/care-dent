import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import css from '../css/style.css'

const SerItem = (props) => {
   

    const {seritemId} = useParams();

    return (
        <div className = 'serItem'>
            <Container>
                <Row>
                    <Col lg ={12} >
                        <img src = 'https://template.hasthemes.com/decare/decare/images/slider/1.png' alt ='' />
                        <p>
                        There's more to a sparkling smile than just brushing and flossing. So for World Oral Health Day, we're getting to the root of dental care best practices with these to-dos that can help ensure your teeth are as healthy as can be.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* {seritemId} */}
        </div>
    );
};

export default SerItem;