import { combineReducers } from 'redux'
import LoginForm from './loginForm';
import Login from './Auth';
import isAuth from './isAuth';
export default combineReducers({

    LoginForm ,
    Login,
    isAuth
});