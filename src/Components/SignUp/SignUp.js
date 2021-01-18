import React, { useState } from 'react';
import Container from '../Reusable/Container/Container';
import SUPage1 from './SUPage1';

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
    const [ page, setPage ] = useState(1);

    const handleSignUp = () => {
        console.log(values);
    }

    const handleChange = ( value, inputName ) => {
        setValues(prevState => {
            const newValues = {...prevState};
            newValues[inputName] = value;
        })
    }

    const handlePageChange = () => {
        if(page === 1) setPage(2);
        else if(page === 2) setPage(1);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(page === 1) handlePageChange();
        else handleSignUp();
    }

    return (
        <Container type="section" className="signUpContainer">
            <h2>SIGN UP</h2>
            {page === 1 ? <SUPage1 handleChange={handleChange} /> : null}
        </Container>
    )
}

export default SignUp;