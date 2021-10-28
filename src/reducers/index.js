import { combineReducers } from 'redux'
import LoginForm from './loginForm';
import Login from './Auth';
import isAuth from './isAuth';
import privacy from './privacy';
import Tnc from './TermAndCondtion';
import contactus from './contactus';
import DashboardInfo from './DashboardInfo';
import GetOrder from './GetOrder';
import RejectOrderList from './RejectOrderList';
import AcceptedOrderList from './AcceptedOrderList';
import MonthlyReport from './MonthlyReport';
export default combineReducers({

    LoginForm ,
    Login,
    isAuth,
    privacy,
    Tnc,
    contactus,
    DashboardInfo,
    GetOrder,
    RejectOrderList,
    AcceptedOrderList,
    MonthlyReport
    
    
});