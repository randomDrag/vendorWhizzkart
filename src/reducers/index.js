import { combineReducers } from 'redux'
import LoginForm from './loginForm';
import isAuth from './Auth';
export default combineReducers({

    LoginForm ,
    isAuth

});