import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../component/chekout-item/checkout-item.componet";

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
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    createItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);