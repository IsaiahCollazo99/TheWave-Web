import React from 'react';
import Container from '../Reusable/Container/Container';
import Input from '../Reusable/Input/Input';
import '../../css/login/login.css';

const Login = () => {

    return (
        <section className="logInContainer">
            <h2>LOG IN</h2>
            <Container type="form" className="logInForm">
                <Input type="email" labelText={"Email"} autoFocus={true} placeholder={"Enter your email."} />
                <Input type="password" labelText={"Password"} placeholder={"Enter your password."} />
            </Container>
        </section>
    )
}

export default Login;