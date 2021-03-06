import React, { useState } from 'react';
import Container from '../Reusable/Container/Container';
import Input from '../Reusable/Input/Input';
import '../../css/login/login.css';
import Button from '../Reusable/Button/Button';
import { firebaseLogIn } from '../../util/firebaseFunctions';
import { Link } from 'react-router-dom';

const Login = () => {
    const [ values, setValues ] = useState({email: "", password: ""});

    const handleChange = ( value, inputName ) => {
        setValues(prevState => {
            const newValues = {...prevState}
            newValues[inputName] = value;
            return newValues;
        })
    }

    const handleLogIn = ( e ) => {
        e.preventDefault();
        firebaseLogIn(values.email, values.password);
    }

    return (
        <Container type="section" className="logInContainer">
            <h2>LOG IN</h2>
            <Container type="form" className="logInForm">
                <Input type="email" labelText={"Email"} autoFocus={true} placeholder={"Enter your email."} name="email" handleChange={handleChange} />
                <Input type="password" labelText={"Password"} placeholder={"Enter your password."} name="password" handleChange={handleChange} />
                <Button type="submit" onClick={handleLogIn}>
                    LOG IN
                </Button>
            </Container>

            <Link to="/register" className="signUpSwitch">Don't have an account? Sign up.</Link>

        </Container>
    )
}

export default Login;