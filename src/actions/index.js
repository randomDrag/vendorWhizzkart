import {LOGIN, LOGIN_FORM} from './const';

import { api } from '../api';


export const LoginForm = (username , Password) =>{

    return {
        type : LOGIN_FORM ,
        payload : {username , Password}
    }
}

export const Auth = (username , Password) =>{

    return async (dispatch) =>{
        
        const response = await api.post('/api/login',{
            "email": username,
            "password": Password
        });
    
        dispatch({
            type : LOGIN,
            payload : response.data.data
        })

    }
}