import { createElement } from 'react';

const Container = ({ type, className, children }) => {
    return createElement(type, {className}, children);
}

export default Container;