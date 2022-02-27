import { CartActionTypes } from "./cart.types";
import { addItemsToCart } from "./cart.utils";
const Intial_state={
    hidden: true,
    cartItems : []
}
 const cartReducer =( state= Intial_state, action) =>{
     switch(action.type){
         case CartActionTypes.TOGGLE_CART_HIDDEN:
             return{
                 ...state,
                 hidden : !state.hidden
             }
          case CartActionTypes.ADD_ITEM:
              return{
                  ...state,
                  cartItems : addItemsToCart(state.cartItems , action.payload)
              }   
             default:
                return state;
     }
 }
 export default cartReducer;