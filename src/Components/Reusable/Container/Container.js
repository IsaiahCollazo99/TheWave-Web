import { createElement } from 'react';

const Container = ({ type, className, children }) => {
    className += " App-Container"
    return createElement(type, {className}, children);
}

export default Container;