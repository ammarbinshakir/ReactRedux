import {combineReducers} from 'redux'
import userFormReducer from "./userForm/userFormReducer";

const rootReducer = combineReducers({
    userForm: userFormReducer
})

export default rootReducer