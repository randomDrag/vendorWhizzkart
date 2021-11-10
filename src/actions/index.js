import {
    ACCEPTED_ORDER_LIST,
    AUTH,
    CONTACT_FORM,
    CONTACT_SUBMIT,
    DASHBOARD_INFO,
    ERROR_CLOSE,
    ERROR_LOGIN,
    FORGET_PASSWORD,
    FORGET_PASSWORD_ERROR,
    GET_ALL_PRODUCT,
    GET_GRAPH_DATA,
    GET_ORDER,
    GET_ORDER_DETAILS,
    GET_PROFILE,
    GET_REGISTER,
    GET_SUPPORT_DATA,
    IS_VALID_OTP,
    LOGIN,
    LOGIN_FORM,
    LOGOUT,
    MONTHLY_REPORT,
    ORDER_ACCEPTED,
    ORDER_REJECTED,
    PRIVACY_POLICY,
    REJECTED_ORDER_LIST,
    SHARE_APP_LINK,
    TERM_AND_CONDATION,
    UPDATE_PASSWORD,
    VERIFY_OTP_FP
} from './const';

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

        if (token) {

            dispatch({
                type: AUTH,
                payload: {
                    token: token
                }

            })
        } else {

            dispatch({
                type: AUTH,
                payload: {
                    token: null
                }

            })
        }

    }


}


export const Auth = (username, Password, callback) => {

    return async (dispatch) => {
        try {

            const response = await api.post('/api/login', {
                "email": username,
                "password": Password
            });

            try {
                await AsyncStorage.setItem('Token', response.data.data.token);
                dispatch({type: AUTH, payload: response.data.data})
            } catch (e) {
                console.log("err from async")
            }


            callback();
            dispatch({type: LOGIN, payload: response.data.data})
        } catch (e) {
            callback();
            dispatch({
                type: ERROR_LOGIN,
                payload: {
                    error: "Invalid username or password",
                    visible: true
                }
            })

        }
    }
}

export const ErrorClose = () => {

    return {
        type: ERROR_CLOSE,
        payload: {
            visible: false
        }
    }
}


export const Logout = () => {

    return async (dispatch) => {

        const token = await AsyncStorage.removeItem('Token');

        dispatch({
            type: LOGOUT,
            payload: {
                token: null
            }

        })

    }

}


export const PrivacyPolicy = () => {

    return async (dispatch) => {

        const response = await api.get('api/privacyPolicy');

        dispatch({type: PRIVACY_POLICY, payload: response.data})

    }
}

export const TeamAndCondtion = () => {

    return async (dispatch) => {

        const response = await api.get('api/termsConditions');

        dispatch({type: TERM_AND_CONDATION, payload: response.data})

    }

}

export const ContactusForm = (name, email, mobile, subject, discription) => {

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

export const sendContact = (name, email, mobile, subject, descreption, callback) => {

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

export const DashboardInfo = () => {

    return async (dispatch) => {

        const response = await api.get('/api/reportCount');

        dispatch({type: DASHBOARD_INFO, payload: response.data})

    }
}

export const GetOrder = (callback) => {

    return async (dispatch) => {

        const response = await api.get('/api/getNewOrder');


        dispatch({type: GET_ORDER, payload: response.data})
        callback();
    }
}
// test
export const AcceptOrder = (statusInfo, orderId , callback) => {

    return async (dispatch) => {

        const response = await api.post('/api/updateOrder', {

            status: statusInfo,
            order_id: orderId

        });
            callback();
        dispatch({type: ORDER_ACCEPTED, payload: orderId})

    }
}

export const RejectOrder = (statusInfo, orderId) => {


    return async (dispatch) => {

        const response = await api.post('/api/updateOrder', {

            status: statusInfo,
            order_id: orderId

        });
        callback();
        dispatch({type: ORDER_REJECTED, payload: orderId})

    }

}


export const RejectOrderList = ( callback) => {

    return async (dispatch) => {

        const response = await api.get('/api/getOrderByStatus');

        dispatch({type: REJECTED_ORDER_LIST, payload: response.data})
        callback();
    }

}

export const AcceptedOrderList = (callback) => {

    return async (dispatch) => {

        const response = await api.get('/api/getOrderByStatus');

        dispatch({type: ACCEPTED_ORDER_LIST, payload: response.data})
        callback();
    }

}

export const monthlyReport = (callback) => {
    return async (dispatch) => {

        const response = await api.get('/api/allReportCount');

        dispatch({type: MONTHLY_REPORT, payload: response.data})
        callback();
    }

}

export const ForgetPasswordUserName = (name, callback) => {

    return async (dispatch) => {

        const response = await api.post('api/forgetPassword', {username: name});
        if (response.data.register == 'true') {
            callback();
        }
        dispatch({type: FORGET_PASSWORD, payload: response.data})

    }
}

export const ForgetPasswordErrorClose = (callback) => {

    callback()
    return {type: FORGET_PASSWORD_ERROR, payload: 'true'}
}

export const VerifyOtpFp = (mobile, otp, callback) => {

    return async (dispatch) => {

        const response = await api.post('/api/otpVerify', {
            mobile: mobile,
            otp: otp
        });
        console.log(response.data.status);
        if (response.data.status == 200) {
            callback()

            dispatch({
                type: VERIFY_OTP_FP,
                payload: {
                    ... response.data,
                    isvalid: true
                }
            })
        } else {
            dispatch({
                type: VERIFY_OTP_FP,
                payload: {
                    ... response.data,
                    isvalid: false
                }
            })


        }


    }
}


export const IsValidOtp = (callback) => {

    callback()
    return {type: IS_VALID_OTP, payload: true}
}

export const UpdatePassword = (username, password , callback) => {

    return async (dispatch) => {

        const response = await api.post('/api/updatePassword', {
            username: username,
            password: password
        });

        if(response.data.status == 200 ){
            callback();
        }

        dispatch({type: UPDATE_PASSWORD, payload: response.data})

    }


}


export const AppLink = ()=> {

    return async (dispatch) =>{

        const response = await api.get('/api/getShareAppLink');

        dispatch({
            type : SHARE_APP_LINK,
            payload : response.data
        })

    }

}

export const getOrderDetails = (orderID , callback) => {

    return async (dispatch) => {

        const response = await api.get(`/api/getOrderDetails?order_id=${orderID}`);

        dispatch({
            type : GET_ORDER_DETAILS,
            payload : response.data
        });

        callback();
    }

}

export const GetALLProductList = () => {

    return async (dispatch) => {

        const response = await api.get('/api/getVendorProductList');

        dispatch({type: GET_ALL_PRODUCT, payload: response.data})

    }

}

export const getRegister = (object) => {

    return async (dispatch) => {

        const response = await api.post('/api/register',object);

        dispatch({type : GET_REGISTER ,
        
        payload : response.data});

    }

}

export const getProfile= (callback) => {

    return async (dispatch) => {

        const response = await api.get('/api/profile');

        dispatch({type : GET_PROFILE ,
        
        payload : response.data});
        callback();

    }

}

export const getGraphData = (callback) => async dispatch =>{

    const response = await api.get('api/getEarningGraphData');

    dispatch({
        type : GET_GRAPH_DATA,
        payload : response.data
    });
    callback();

}


export const getSupportdata = () => async dispatch =>{

    const response = await api.get('/api/supportData');

    dispatch({
        type : GET_SUPPORT_DATA,
        payload : response.data
    })

}