import { combineReducers } from 'redux';
import textReducer from './textReducer.js';

const rootReducer = combineReducers({
    text:textReducer
});

export default rootReducer;
