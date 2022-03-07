import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../component/chekout-item/checkout-item.componet";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";
import './checkout.style.scss';

const CheckoutPage =({createItems, total})=>{

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                createItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id}/> )
            }
            <div className="total">
                <span> TOTAL : $ {total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test creadit card for payments*
                <br/>
                4242 4242 4242 4242 | Exp.: Current Date | CVV : any 3 digit number
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    createItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);