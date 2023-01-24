import {ADD_TO_CART} from '../constant'
import {REMOVE_TO_CART} from '../constant'


export const addtocart = (data) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, data: data });
  };
  export const removetocart = (data) => (dispatch) => {
    dispatch({ type: REMOVE_TO_CART, data: data});
  };
// export const removetocart =(()=>{
//     return{
//         type:REMOVE_TO_CART,
     

//     }
// })