import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service';
import css from '../css/style.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className = 'services'>
            <Container>
                <Row>
                    <h3 className='title'>Services</h3>
                    {
                        services.map(service => <Service
                        key = {service.id}
                        service = {service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;