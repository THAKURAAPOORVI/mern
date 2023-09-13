export const placeOrderReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return{
            loading :true
        }
        case 'PlACE_ORDER_SUCCESS' : return{
            loading :false,
            success:true
        }
        case 'PlACE_ORDER_FAILED' : return{
            loading :false,
            error:action.payload
        }
        default : return state
    }
}

export const getUserOrderReducer = (state = {orders : []}, action) => {
    
    switch (action.type) {
        case 'GET_USER_ORDER_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_USER_ORDER_SUCCESS': 
        console.log("success")
        console.log(action.payload)
        return {
           loading:false,
            orders: action.payload
        }
        case 'GET_USER_ORDER_FAILED': return {
            error: action.payload,
            loading:false
        }
        default: return state
    }
}