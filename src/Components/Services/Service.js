import React from 'react';
import { Container,Col, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from '../css/style.css'

const Service = ({service}) => {
    const {key, name, doctor, patient, img, description} = service;
    return (
            
            <Col lg={4}>
                <div className = 'service_item d-flex'>
                    <img src = {img} alt= 'icon'></img>
                    <div className = 'item_des'>
                        <h5>{name}</h5>
                        <h4>{doctor}</h4>
                        <h6>Happy Patient: {patient}</h6>
                        <Link to = {`/seritem/${key}`}>
                            <button className ='b_btn'>Details</button>
                        </Link>
                    </div>
                </div>            
            </Col>
    );
};

export default Service;