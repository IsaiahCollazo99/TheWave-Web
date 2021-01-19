import React from 'react';
import Container from '../Reusable/Container/Container';
import Input from '../Reusable/Input/Input';

const SUPage1 = ({ handleChange }) => {
    return (
        <Container type="form" className="SUForm1">
            <Input type="email" labelText="Email" handleChange={handleChange} placeholder="Enter your email" name="email" />
            <Input type="password" labelText="Password" handleChange={handleChange} placeholder="Enter a password" name="password" />
            <Input type="password" labelText="Confirm Password" handleChange={handleChange} placeholder="Re-Enter your password" name="confirmPassword" />
            <Input type="text" labelText ="Username" handleChange={handleChange} placeholder="Enter a username" name="username" />
            <Input type="text" labelText ="First Name" handleChange={handleChange} placeholder="Enter your first name" name="firstName" />
            <Input type="text" labelText ="Last Name" handleChange={handleChange} placeholder="Enter your last name" name="lastName" />
        </Container>
    )
}

export default SUPage1;