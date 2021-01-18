import React from 'react';
import { NavLink } from 'react-router-dom';

const LogInHandler = () => {
    return (
        <>
        <NavLink to="/login" className="logInHandler">Log In</NavLink>
        </>
    )
}

export default LogInHandler;