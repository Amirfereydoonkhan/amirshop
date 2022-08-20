import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT,REMOVE_FROM_CART } from "./actionType";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload:product
    }
}
 
export const increment = (productId) => {
    return {
        type: INCREMENT,
        payload:productId
    }
}

export const decrement = (productId) => {
    return {
        type: DECREMENT,
        payload:productId
    }
}
export const RemoveFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload:productId
    }
}
export const ClearCart = () => {
    return {
        type: CLEAR_CART 
       }
}