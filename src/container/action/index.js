import { SET_PRODUCT, CHANGE_COUNT, DELETE_PRODUCT , CHECK_OUT} from "../type";

export const SetProduct=(data)=>({
    type: SET_PRODUCT,
    payload: data
})


export const ChangeCount=(count, id)=>({
    type: CHANGE_COUNT,
    payload:{
        id: id,
        count: count
    }
})

export const DeleteProduct=(id)=>({
    type: DELETE_PRODUCT,
    payload: id
})


export const CheckOut=()=>({
    type: CHECK_OUT,
    payload: []
})

