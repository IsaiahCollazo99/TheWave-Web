import React from 'react';

const Button = ({ children, ...props }) => {
    return (
        <button className="App-Button" {...props}>
            {children}
        </button>
    )
}

export default Button;