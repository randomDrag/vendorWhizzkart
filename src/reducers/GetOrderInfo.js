import {GET_ORDER_DETAILS} from '../actions/const';
import _ from 'lodash';

export default ( state ={} , action) =>{

    switch(action.type){

        case GET_ORDER_DETAILS : 

        return action.payload.data

        default:
            return state;

    }

}