import React, { useState } from 'react';
import '../../../css/reusableInput/input.css';

const Input = ({ type, defaultValue="", labelText, handleChange, ...props }) => {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = ( e ) => {
        setValue(e.target.value);
        handleChange(e.target.value, props.name);
    }
    
    return (
        <article className="inputContainer">
            <label>{labelText}</label>
            <input type={type} value={value} onChange={onChange} {...props} />
        </article>
    )
}

export default Input;