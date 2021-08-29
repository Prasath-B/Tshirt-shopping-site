import { FETCH_PRODUCTS_REQUESTED, PRODUCTS_CANOT_BE_FETCHED, PRODUCTS_FETCHED, ADD_TO_CART,REMOVE_FROM_CART, ADJUST_QUANTITY  } from "./ActionTypes";

import axios from "axios";

export const GetProductsReq = ( )=>{
    return {
        type: FETCH_PRODUCTS_REQUESTED
    }
}

 const GotProducts = (products )=>{
    return {
        type: PRODUCTS_FETCHED,
        payload: products
    }
}

 const GotError = (error)=>{
    return {
        type: PRODUCTS_CANOT_BE_FETCHED,
        payload : error
    }
}


export const AddToCart = (itemId)=> {
    return{
        type:ADD_TO_CART,
        payload: { 
            id:itemId
         }
    }
}

export const RemoveFromCart = (itemId)=> {
    return{
        type:REMOVE_FROM_CART,
        payload: { 
            id:itemId
         }
    }
}
export const Adjust = (itemId,qty)=>{
    return {
        type: ADJUST_QUANTITY,
        payload:{
            id:itemId,
            qty
        }
    }
}

export const fetchProducts = () =>{
    return (dispatch =>{
        dispatch(GetProductsReq)
        axios.get("https://peaceful-spire-71292.herokuapp.com/")
            .then(response =>  {
                const products = response.data;
                dispatch(GotProducts(products))
            })
            .catch(error =>{
                const err_msg = error.message
                dispatch(GotError(err_msg))
            })
    })
}

