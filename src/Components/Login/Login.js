import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div id = ''>
            <h3>Haven't any account?</h3>
            <Nav.Link as= {HashLink} to = '/register'>Register</Nav.Link>
            <form>
                            <lable htmlFor = 'email'>Email</lable>
                            <input type = 'text' name = 'email'></input><br/>
                            <lable htmlFor = 'password'>Pass</lable>
                            <input type = 'password' name = 'password'></input><br/>
                        </form>
            <button onClick = {googleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;