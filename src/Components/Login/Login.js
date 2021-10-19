import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div className = 'login'>
            <h3>Haven't any account?</h3>
            <Nav.Link as= {HashLink} to = '/register'>Register</Nav.Link>
            <form>
                            
                            <input type = 'email' name = 'email' placeholder = 'Enter email' className = 'inp_field'></input><br/>
                            <input type = 'password' name = 'password' placeholder = 'Enter password' className = 'inp_field'></input><br/>
            <button className = 'b_btn my-4'>Login</button>

                        </form>
            <button onClick = {googleSignIn}  className = 'b_btn'>Google Login</button>
        </div>
    );
};

export default Login;