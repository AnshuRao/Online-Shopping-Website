import React  from "react";

import CustomButton from '../custom-button/custome-button.component';

import './cart-dropdown.style.scss';

const CartDropDown = ()=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-item"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
 
export default CartDropDown;
