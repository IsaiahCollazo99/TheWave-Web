import React, { useState } from 'react';
import Button from '../Reusable/Button/Button';
import Container from '../Reusable/Container/Container';
import Input from '../Reusable/Input/Input';
import '../../css/signup/signup.css';
import { firebaseSignUp } from '../../util/firebaseFunctions';

const defaultValues = {
    email: "", 
    password: "", 
    confirmPassword: "",
    username: "", 
    firstName: "", 
    lastName: ""
}

const SignUp = () => {
    const [ values, setValues ] = useState({...defaultValues});

    const handleSignUp = ( e ) => {
        e.preventDefault();
        firebaseSignUp(values);
    }

    const handleChange = ( value, inputName ) => {
        setValues(prevState => {
            const newValues = {...prevState};
            newValues[inputName] = value;
            return newValues;
        })
    }

    return (
        <Container type="section" className="signUpContainer">
            <h2>SIGN UP</h2>

            <Container type="form" className="signUpForm" onSubmit={handleSignUp}>
                <Input type="email" labelText="Email" handleChange={handleChange} placeholder="Enter your email" name="email" />
                <Input type="password" labelText="Password" handleChange={handleChange} placeholder="Enter a password" name="password" />
                <Input type="password" labelText="Confirm Password" handleChange={handleChange} placeholder="Re-Enter your password" name="confirmPassword" />
                <Input type="text" labelText ="Username" handleChange={handleChange} placeholder="Enter a username" name="username" />
                <Input type="text" labelText ="First Name" handleChange={handleChange} placeholder="Enter your first name" name="firstName" />
                <Input type="text" labelText ="Last Name" handleChange={handleChange} placeholder="Enter your last name" name="lastName" />

                <Button type="submit" onClick={handleSignUp}>
                    SIGN UP
                </Button>
            </Container>
        </Container>
    )
}

export default SignUp;