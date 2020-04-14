import {USER_FORM} from "./userFormTypes";
import {DELETE_USER} from "./userFormTypes";
import {EDIT_USER} from "./userFormTypes";

const initialState = []

const userFormReducer =(state=initialState, action)=>{
    if (action.type === USER_FORM) {
        return [...state, action.payload]
    } else {
        return state
    }
}

export default userFormReducer