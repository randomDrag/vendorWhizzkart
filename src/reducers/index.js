import { combineReducers } from 'redux'

export default combineReducers({

    blank: (state, action)=> state == null

});