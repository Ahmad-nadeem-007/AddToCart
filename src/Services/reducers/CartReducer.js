import { ADD_TO_CART, REMOVE_TO_CART } from '../constant'
const initialstate = {
    cartData: []
}
const CartReducer = function (state = initialstate, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("dataaaaaaaaa",action.data)
            return {
                ...state,
                cartData: [...state.cartData, { ...action.data }]
            }
        case REMOVE_TO_CART:
            // state.pop();
            console.log("data",action.data)
            return {
                ...state,

            }

        default:
            return state

    }

}

export default CartReducer;