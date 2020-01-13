
// import { cakeObj, cakeavilablity, cakeprize, cakedetails } from '../data'; 

import {
    GET_CAKES, GET_CAKE_DETAILS, GET_CAKES_PRIZE, LOAD_DELIVERY_ADDRESS, LOAD__DEFAULT_DELIVERY_ADDRESS,
    GET_CART_LIST, ADD_TO_CART, GET_CART_COUNT, SESSION_STATUS, ADD_DELIVERY_ADDRESS, PAYMENT_OPR, SIGN_IN_CHECK
} from '../actions/cakeaction';


const initialState = {
    cakeslist: [],
    cakedetails: {},
    cartcount: 0,
    cakeweight: '',
    cakeprize: '',
    deliveraddress: [],
    loginpage: false
}


const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAKES: return {
            ...state,
            cakeslist: action.payload
        }
        case GET_CAKE_DETAILS: return {
            ...state,
            cakedetails: action.payload
        }
        case GET_CAKES_PRIZE: return {
            ...state,
            cakeprize: action.payload.prize,
            cakeweight: action.payload.weight
        }
        case ADD_TO_CART: return {
            ...state,
            cartcount: action.payload
        }
        case GET_CART_COUNT: return {
            ...state,
            cartcount: action.payload
        }
        case GET_CART_LIST: return {
            ...state,
            cartarray: action.payload.cart,
            cartcount: action.payload.cartitems
        }
        case LOAD__DEFAULT_DELIVERY_ADDRESS: return {
            ...state,
            deliveraddress: action.payload
        }
        case LOAD_DELIVERY_ADDRESS: return {
            ...state,
            deliveraddress: action.payload
        }
        case ADD_DELIVERY_ADDRESS: return {
            ...state
        }
        case PAYMENT_OPR: return {
            ...state,
            cartcount: 0
        }
        case SESSION_STATUS: return {
            ...state
        }
        case SIGN_IN_CHECK: return {
            ...state,
            loginpage: action.payload
        }
        default: return state
    }
}


export default cakeReducer