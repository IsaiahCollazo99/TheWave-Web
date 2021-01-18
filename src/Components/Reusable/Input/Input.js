import React, { useState } from 'react';
import '../../../css/reusableInput/input.css';

const Input = ({ type, defaultValue="", labelText, ...props }) => {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = ( e ) => {
        setValue(e.target.value);
    }
    
    return (
        <article className="inputContainer">
            <label>{labelText}</label>
            <input type={type} value={value} onChange={onChange} {...props} />
        </article>
    )
}

export default Input;