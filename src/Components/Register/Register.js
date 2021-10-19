import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../../Firebase/firebase.initialize";
import css from '../css/style.css';


initializeAuthentication();

const Register = () => {

    const auth = getAuth();

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState('');


    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePass = e =>{
        setPass(e.target.value);
    }
    
    const handleRegistration = (e) => {
        e.preventDefault();

        if (pass.length < 6 ){
            setError('Password should be at least 6 characters.')
            return;
        }
        console.log(email, pass)
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            setError('Email already registered')
        })
    }

    return (
        <div className = 'register'>
            <Container>
                <Row>
                    <Col md ={12}>
                        <h3>Pleasse Register</h3>
                        <form onSubmit = {handleRegistration}>
                            
                            <input type = 'email' name = 'email' onBlur = {handleEmail} required placeholder = 'Enter email' className = 'inp_field'></input><br/>
                            
                            <input type = 'password' name = 'password' onBlur = {handlePass} required placeholder = 'Enter password' className = 'inp_field'></input><br/>
                            
                            <input type = 'submit' value = 'Register' className = 'b_btn'></input>
                           
                            <h4 className = "text-danger" >{error}</h4>
                        </form>
                        <h4>Already Registered?</h4>
                        <Nav.Link as= {HashLink} to = '/login' className = 'ab_btn'>Login</Nav.Link>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;