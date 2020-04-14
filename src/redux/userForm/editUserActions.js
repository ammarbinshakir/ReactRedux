
import {EDIT_USER} from "./userFormTypes";

export const editUser =(payload)=>{
    return{
        type: 'EDIT_USER',
        payload: payload
    }
}