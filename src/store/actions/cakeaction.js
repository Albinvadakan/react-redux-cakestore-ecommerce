

import { cakeObj } from '../data';
import { addressObj } from '../data';
import { cakeavilablity } from '../data';
import { cakeprize } from '../data';
import { cakedetails } from '../data'


export const GET_CAKES = 'GET_CAKES';
export const GET_CAKE_DETAILS = 'GET_CAKE_DETAILS';
export const GET_CAKES_PRIZE = 'GET_CAKES_PRIZE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART_LIST = 'GET_CART_LIST';
export const UPDATE_CART = 'GET_CAKE_DETAILS';
export const GET_CART_COUNT = 'GET_CART_COUNT';
export const LOAD__DEFAULT_DELIVERY_ADDRESS = 'LOAD__DEFAULT_DELIVERY_ADDRESS';
export const LOAD_DELIVERY_ADDRESS = 'LOAD_DELIVERY_ADDRESS';
export const ADD_DELIVERY_ADDRESS = 'ADD_DELIVERY_ADDRESS';
export const SESSION_STATUS = 'SESSION_STATUS';
export const SIGN_IN_CHECK = 'SIGN_IN_CHECK';
export const PAYMENT_OPR = 'PAYMENT_OPR';


export const getcakes = () => {
    return {
        type: GET_CAKES,
        payload: cakeObj
    }
}

export const getcakedetails = (cakeId) => {

    let cakedata;

    for (let i = 0; i < cakeObj.length; i++) {
        if (cakeId === cakeObj[i].id) {
            cakedata = { cake_basic: cakeObj[i] }
        }
    }
    for (let j = 0; j < cakedetails.length; j++) {
        if (cakeId === cakedetails[j].cakeId) {
            cakedata = { ...cakedata, cake_details: cakedetails[j] }
        }
    }
    for (let k = 0; k < cakeprize.length; k++) {
        if (cakeId === cakeprize[k].cakeId) {

            const prizArray = [];
            for (var key in cakeprize[k]) {
                if (cakeprize[k].hasOwnProperty(key)) {
                    if (key.includes('KG')) {
                        prizArray.push(key);
                    }
                }
            }
            cakedata = { ...cakedata, cake_prize: prizArray }
        }
    }
    for (let n = 0; n < cakeavilablity.length; n++) {
        if (cakeId === cakeavilablity[n].cakeId) {
            cakedata = { ...cakedata, cake_avilablity: cakeavilablity[n] }
        }

    }
    return {
        type: GET_CAKE_DETAILS,
        payload: cakedata
    }
}


export const getcakeprize = (weight, cakeId) => {
    const cakeobj = {};
    cakeobj['weight'] = weight;
    for (let i = 0; i < cakeprize.length; i++) {
        if (cakeId === cakeprize[i].cakeId) {
            cakeobj['prize'] = cakeprize[i][weight];
        }
    }
    return {
        type: GET_CAKES_PRIZE,
        payload: cakeobj
    }
}

export const addtocart = (cakeobj) => {
    const existingCart = localStorage.getItem('cart');
    let cartcount;
    if (existingCart !== null) {
        const cart = JSON.parse(existingCart)
        cart['cartarray'].push(cakeobj)
        cartcount = cart['cartarray'].length;
        localStorage.setItem('cart', JSON.stringify(cart));

    } else {
        const cartObj = { cartarray: [] };
        cartObj['cartarray'].push(cakeobj);
        cartcount = cartObj['cartarray'].length;
        localStorage.setItem('cart', JSON.stringify(cartObj));
    }
    return {
        type: ADD_TO_CART,
        payload: cartcount
    }
}
export const getcartitems = () => {
    let cart;
    const existingCart = localStorage.getItem('cart');
    if (existingCart !== null) {
        cart = JSON.parse(existingCart);
        return {
            type: GET_CART_LIST,
            payload: { cart: cart['cartarray'], cartitems: cart['cartarray'].length }
        }
    } else {
        return {
            type: GET_CART_LIST,
            payload: { cart: [], cartitems: 0 }
        }
    }
}

export const getcartCount = () => {
    let cart;
    const existingCart = localStorage.getItem('cart');
    if (existingCart !== null) {
        cart = JSON.parse(existingCart);
        return {
            type: GET_CART_COUNT,
            payload: cart['cartarray'].length
        }
    } else {
        return {
            type: GET_CART_COUNT,
            payload: 0
        }
    }

}

export const loaddefaultdeliveryaddress = () => {
    const defaultaddressObj = { addressarray: [] }
    defaultaddressObj['addressarray'].push(addressObj);
    localStorage.setItem("address", JSON.stringify(defaultaddressObj));
    return {
        type: LOAD_DELIVERY_ADDRESS,
        payload: defaultaddressObj['addressarray']
    }
}

export const loaddeliveryaddress = () => {
    const address = JSON.parse(localStorage.getItem('address'));
    return {
        type: LOAD_DELIVERY_ADDRESS,
        payload: address['addressarray']
    }
}

export const adddeliveryaddress = (deliveryaddress) => {
    const address = JSON.parse(localStorage.getItem('address'));
    address['addressarray'].push(deliveryaddress);
    localStorage.setItem("address", JSON.stringify(address));
    return {
        type: ADD_DELIVERY_ADDRESS,
    }
}

export const emptycartcount = () => {
    return {
        type: PAYMENT_OPR,
    }
}


export const signincheck = (url) => {
    if (url.includes('login')) {
        return {
            type: SIGN_IN_CHECK,
            payload: true
        }

    } else {
        return {
            type: SIGN_IN_CHECK,
            payload: false
        }
    }
}









