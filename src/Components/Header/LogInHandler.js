import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { firebaseLogOut } from '../../util/firebaseFunctions';
import Button from '../Reusable/Button/Button';

const LogInHandler = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <React.Fragment>
        {currentUser ? 
            <Button onClick={firebaseLogOut} className="logOutButton">LOG OUT</Button> : 
            <NavLink to="/login" className="logInHandler">LOG IN</NavLink>}

        </React.Fragment>
    )
}

export default LogInHandler;