import {USER_FORM} from "./userFormTypes";

export const userForm =(payload)=>{
    return{
        type: 'USER_FORM',
        payload: payload
    }
}