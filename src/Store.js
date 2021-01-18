import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const reducer = {

};
const middleware = [...getDefaultMiddleware(), logger];

const Store = configureStore({
    reducer,
    middleware
});

export default Store;