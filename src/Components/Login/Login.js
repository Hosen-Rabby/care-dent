import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div id = ''>
            <button onClick = {googleSignIn}>Login</button>
        </div>
    );
};

export default Login;