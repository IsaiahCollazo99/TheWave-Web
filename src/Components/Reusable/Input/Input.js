import React, { useState } from 'react';

const Input = ({ type, defaultValue="", labelText }) => {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = ( e ) => {
        setValue(e.target.value);
    }
    
    return (
        <article className="inputContainer">
            <label>{labelText}</label>
            <input type={type} value={value} onChange={onChange} />
        </article>
    )
}

export default Input;