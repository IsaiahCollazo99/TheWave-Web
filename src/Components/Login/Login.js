import React from 'react';
import Container from '../Reusable/Container/Container';
import Input from '../Reusable/Input/Input';

const Login = () => {

    return (
        <section className="logInContainer">
            <h2>Log In</h2>
            <Container type="form" className="logInForm">
                <Input type="email" labelText={"Email:"} />
            </Container>
        </section>
    )
}

export default Login;