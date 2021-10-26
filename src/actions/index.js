import {AUTH, LOGIN, LOGIN_FORM, LOGOUT} from './const';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../api';


export const LoginForm = (username, Password) => {

    return {
        type: LOGIN_FORM,
        payload: {
            username,
            Password
        }
    }
}

export const isAuth = () => {

    return async (dispatch) => {

        const token = await AsyncStorage.getItem('Token');

        if(token) {

            dispatch({
                type : AUTH,
                payload : {token : token}
    
            })
        }else{
          
            dispatch({
                type : AUTH,
                payload : {token : null}
    
            })   
        }

    }


}


export const Auth = (username, Password) => {

    return async (dispatch) => {

        const response = await api.post('/api/login', {
            "email": username,
            "password": Password
        });

        try {
            await AsyncStorage.setItem('Token', response.data.data.token);
            dispatch({
                type : AUTH ,
                payload : response.data.data
            })
        } catch (e) {
            console.log("err from async")
        }

        dispatch({type: LOGIN, payload: response.data.data})

    }
}


export const Logout = () => {

return async (dispatch) => {

    const token = await AsyncStorage.removeItem('Token');

    dispatch({
        type : LOGOUT,
        payload : {token : null}

    })

}

}