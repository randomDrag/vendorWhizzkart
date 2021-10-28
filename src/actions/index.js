import {ACCEPTED_ORDER_LIST, AUTH, CONTACT_FORM, CONTACT_SUBMIT, DASHBOARD_INFO, ERROR_CLOSE, ERROR_LOGIN, GET_ORDER, LOGIN, LOGIN_FORM, LOGOUT, ORDER_ACCEPTED, ORDER_REJECTED, PRIVACY_POLICY, REJECTED_ORDER_LIST, TERM_AND_CONDATION} from './const';

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


export const Auth = (username, Password , callback) => {

    return async (dispatch) => {
        try{

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

        
        callback();
        dispatch({type: LOGIN, payload: response.data.data})
    }catch(e){
        callback();
        dispatch({ type : ERROR_LOGIN , payload : {error : "Invalid username or password" , visible : true}})

    }
    }
}

export const ErrorClose = () => {

    return {
        type: ERROR_CLOSE,
        payload: {
            visible : false
        }
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


export const PrivacyPolicy = () =>{

    return async (dispatch) => {

        const response = await api.get('api/privacyPolicy');

        dispatch({
            type : PRIVACY_POLICY,
            payload : response.data
        })

    }
}

export const TeamAndCondtion = () =>{

    return async (dispatch) => {

        const response = await api.get('api/termsConditions');

        dispatch({
            type : TERM_AND_CONDATION,
            payload : response.data
        })

    }

}

export const ContactusForm = (name,email,mobile,subject,discription ) => {

    return {
        type: CONTACT_FORM,
        payload: {
            name,
            email,
            mobile,
            subject,
            discription
        }
    }
}

export const sendContact = (name, email,mobile,subject,descreption , callback) => {

    return async (dispatch) => {
      

        const response = await api.post('/api/contactUs', {
            name,
             email,
            mobile,
            subject,
            descreption
        });
callback();
        dispatch({type: CONTACT_SUBMIT, payload: response.data.data})
   
    }
}

export const DashboardInfo = () =>{

    return async (dispatch) =>{

        const response = await api.get('/api/reportCount');

        dispatch({
            type : DASHBOARD_INFO,
            payload : response.data
        })

    }
}

export const GetOrder = () =>{

    return async (dispatch) => {

        const response = await api.get('/api/getNewOrder');


        dispatch({
            type : GET_ORDER ,
            payload : response.data
        })

    }
}

export const AcceptOrder = (statusInfo ,orderId ) =>{

    return async (dispatch) =>  {

        const response = await api.post('/api/updateOrder',{
            
                status : statusInfo,
                order_id : orderId
            
        });

        dispatch({
            type : ORDER_ACCEPTED,
            payload : orderId
        })

    }
}

export const RejectOrder = (statusInfo , orderId) => {


    return async (dispatch) => {

        const response = await api.post('/api/updateOrder',{
            
            status : statusInfo,
            order_id : orderId
        
    });

    dispatch({
        type : ORDER_REJECTED,
        payload : orderId
    })

    }

}


export const RejectOrderList = () => {

    return async (dispatch) => {

    const response = await api.get('/api/getOrderByStatus');

        dispatch({
            type : REJECTED_ORDER_LIST,
            payload : response.data
        })

    }

}

export const AcceptedOrderList = () => {

    return async (dispatch) => {

    const response = await api.get('/api/getOrderByStatus');

        dispatch({
            type :ACCEPTED_ORDER_LIST,
            payload : response.data
        })

    }

}