import React  from "react";

import CustomButton from '../custom-button/custome-button.component';

import './cart-dropdown.style.scss';

import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";


const CartDropDown = ({cartItems})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem=> <CartItem key={cartItem.id} item= {cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps =(state)=>({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);
