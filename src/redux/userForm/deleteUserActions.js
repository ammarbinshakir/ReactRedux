import {DELETE_USER} from "./userFormTypes";

export const userForm =(payload)=>{
    return{
        type: 'DELETE_USER',
        payload: payload
    }
}